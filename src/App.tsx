import { useMemo, useState } from 'react';
import { Icon } from './components/Icon';
import { BlockRenderer } from './components/BlockRenderer';
import { modules, allLessons, references, resources, workshops } from './data';
import { courseInfo, ui, type Lesson, type Localized } from './data/types';
import { useI18n } from './i18n';
import { useProgress } from './hooks/useLocalStorage';

type View =
  | { kind: 'home' }
  | { kind: 'lesson'; lessonId: string }
  | { kind: 'resources' }
  | { kind: 'references' }
  | { kind: 'workshops' }
  | { kind: 'about' };

export function App() {
  const { lang, setLang, t } = useI18n();
  const [view, setView] = useState<View>({ kind: 'home' });
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const progress = useProgress();

  const go = (v: View) => {
    setView(v);
    setQuery('');
    setSidebarOpen(false);
    window.scrollTo({ top: 0 });
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allLessons.filter((l) => {
      const hay = (t(l.title) + ' ' + t(l.summary) + ' ' + t(l.category) + ' ' + l.outcomes.map((o) => t(o)).join(' ')).toLowerCase();
      return hay.includes(q);
    });
  }, [query, lang]);

  const completedCount = progress.completed.length;
  const totalLessons = allLessons.length;
  const pct = Math.round((completedCount / totalLessons) * 100);

  const currentLesson = view.kind === 'lesson' ? allLessons.find((l) => l.id === view.lessonId) : null;
  const currentModule = currentLesson ? modules.find((m) => m.lessons.includes(currentLesson)) : null;
  const lessonIndex = currentLesson ? allLessons.indexOf(currentLesson) : -1;
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex >= 0 && lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  return (
    <div className="app">
      {sidebarOpen && <div className="backdrop" onClick={() => setSidebarOpen(false)} />}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-logo">P</div>
          <div className="brand-text">
            <span className="brand-code">PRO192</span>
            <span className="brand-sub">{t(ui.brandSub)}</span>
          </div>
        </div>

        <div className="search">
          <span className="search-icon">
            <Icon name="search" size={16} />
          </span>
          <input
            placeholder={t(ui.searchPlaceholder)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() ? (
          <div className="search-results">
            {searchResults.length === 0 && <div className="empty">{t(ui.noResults)}</div>}
            {searchResults.map((l) => (
              <div key={l.id} className="search-result" onClick={() => go({ kind: 'lesson', lessonId: l.id })}>
                <div className="sr-cat">{t(l.category)}</div>
                <div className="sr-title">{highlightMatch(t(l.title), query)}</div>
                <div className="sr-summary">{highlightMatch(t(l.summary), query)}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="nav-group">
              <div className="nav-group-title">{t(ui.overview)}</div>
              <NavItem icon="home" label={t(ui.home)} active={view.kind === 'home'} onClick={() => go({ kind: 'home' })} />
              <NavItem icon="book" label={t(ui.resources)} active={view.kind === 'resources'} onClick={() => go({ kind: 'resources' })} />
              <NavItem icon="list" label={t(ui.workshops)} active={view.kind === 'workshops'} onClick={() => go({ kind: 'workshops' })} />
              <NavItem icon="sparkles" label={t(ui.references)} active={view.kind === 'references'} onClick={() => go({ kind: 'references' })} />
              <NavItem icon="cube" label={t(ui.about)} active={view.kind === 'about'} onClick={() => go({ kind: 'about' })} />
            </div>

            {modules.map((m) => (
              <div className="nav-group" key={m.id}>
                <div className="nav-group-title">{t(m.part)}</div>
                {m.lessons.map((l) => (
                  <NavItem
                    key={l.id}
                    icon={l.icon}
                    label={t(l.title)}
                    active={view.kind === 'lesson' && view.lessonId === l.id}
                    onClick={() => go({ kind: 'lesson', lessonId: l.id })}
                    done={progress.isCompleted(l.id)}
                  />
                ))}
              </div>
            ))}

            <div className="nav-extra">
              <div className="nav-group-title">{t(ui.progress)}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="progress-text">
                <span>{completedCount}/{totalLessons} {t(ui.lessons)}</span>
                <span>{pct}%</span>
              </div>
            </div>
          </>
        )}
      </aside>

      <div className="main">
        <header className="topbar">
          <button className="icon-btn menu-toggle" onClick={() => setSidebarOpen((s) => !s)}>
            <Icon name="menu" />
          </button>
          <div className="breadcrumb">
            {view.kind === 'home' && <span className="crumb-current">{t(ui.home)}</span>}
            {view.kind === 'lesson' && currentLesson && (
              <>
                <span>{t(currentLesson.category)}</span>
                <span>›</span>
                <span className="crumb-current">{t(currentLesson.title)}</span>
              </>
            )}
            {view.kind === 'resources' && <span className="crumb-current">{t(ui.resources)}</span>}
            {view.kind === 'workshops' && <span className="crumb-current">{t(ui.workshops)}</span>}
            {view.kind === 'references' && <span className="crumb-current">{t(ui.references)}</span>}
            {view.kind === 'about' && <span className="crumb-current">{t(ui.about)}</span>}
          </div>
          <div className="topbar-actions">
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              title="Switch language"
            >
              <span className="lang-current">{lang.toUpperCase()}</span>
              <span className="lang-other">{lang === 'en' ? 'VI' : 'EN'}</span>
            </button>
            {currentLesson && (
              <button
                className={`icon-btn ${progress.isBookmarked(currentLesson.id) ? 'active' : ''}`}
                title={t(ui.saveLesson)}
                onClick={() => progress.toggleBookmark(currentLesson.id)}
              >
                <Icon name="bookmark" />
              </button>
            )}
          </div>
        </header>

        <main className="content">
          {view.kind === 'home' && <Home onOpen={go} progress={progress} />}
          {view.kind === 'about' && <About />}
          {view.kind === 'resources' && <Resources />}
          {view.kind === 'workshops' && <Workshops />}
          {view.kind === 'references' && <References />}
          {view.kind === 'lesson' && currentLesson && (
            <LessonView
              lesson={currentLesson}
              moduleName={currentModule ? t(currentModule.title) : ''}
              done={progress.isCompleted(currentLesson.id)}
              onToggleDone={() => progress.toggleComplete(currentLesson.id)}
              prev={prevLesson}
              next={nextLesson}
              go={go}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
  done,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
  done?: boolean;
}) {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="nav-icon">
        <Icon name={icon} size={16} />
      </span>
      <span>{label}</span>
      {done && (
        <span className="nav-check">
          <Icon name="check" size={14} />
        </span>
      )}
    </div>
  );
}

function highlightMatch(text: string, q: string) {
  const i = text.toLowerCase().indexOf(q.trim().toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.trim().length)}</mark>
      {text.slice(i + q.trim().length)}
    </>
  );
}

function Home({
  onOpen,
  progress,
}: {
  onOpen: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
}) {
  const { t } = useI18n();
  return (
    <>
      <section className="hero">
        <span className="hero-tag">
          <Icon name="sparkles" size={14} />
          {courseInfo.code} · {t(courseInfo.university)}
        </span>
        <h1>{t(courseInfo.title)}</h1>
        <p>{t(courseInfo.description)}</p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t(ui.courseCode)}</span>
            <span className="hero-meta-value">{courseInfo.code}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t(ui.prerequisite)}</span>
            <span className="hero-meta-value">{courseInfo.prerequisite}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t(ui.numLessons)}</span>
            <span className="hero-meta-value">{allLessons.length}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t(ui.completedCount)}</span>
            <span className="hero-meta-value">{progress.completed.length}/{allLessons.length}</span>
          </div>
        </div>
      </section>

      <h2 className="section-heading">{t(ui.learningJourney)}</h2>
      <div className="module-grid">
        {modules.map((m) => {
          const doneCount = m.lessons.filter((l) => progress.isCompleted(l.id)).length;
          return (
            <div
              key={m.id}
              className="module-card"
              onClick={() => onOpen({ kind: 'lesson', lessonId: m.lessons[0].id })}
            >
              <div className="card-icon">
                <Icon name={m.lessons[0].icon} size={22} />
              </div>
              <h3>{t(m.title)}</h3>
              <p>{t(m.description)}</p>
              <div className="card-meta">
                <span>{m.lessons.length} {t(ui.lessons)}</span>
                <span>
                  {doneCount}/{m.lessons.length} ✓
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-divider" />

      <h2 className="section-heading">{t(ui.learningOutcomes)}</h2>
      <div className="outcomes">
        <ul>
          {courseInfo.outcomes.map((o, i) => (
            <li key={i}>{t(o)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t(ui.aboutCourse)}</div>
        <h1 className="lesson-title">{t(courseInfo.title)}</h1>
        <p className="lesson-summary">{t(courseInfo.description)}</p>
      </div>
      <div className="outcomes">
        <div className="outcomes-title">{t(ui.learningOutcomes)}</div>
        <ul>
          {courseInfo.outcomes.map((o, i) => (
            <li key={i}>{t(o)}</li>
          ))}
        </ul>
      </div>
      <h3 className="section-heading">{t(ui.academicPolicy)}</h3>
      <p className="block-p">{t(ui.policyText)}</p>
    </>
  );
}

function Resources() {
  const { t } = useI18n();
  const groups: Record<string, typeof resources> = { lectureSlides: [], reading: [] };
  resources.forEach((r) => groups[r.group].push(r));
  const groupLabels: Record<string, Localized> = {
    lectureSlides: ui.lectureSlides,
    reading: ui.reading,
  };
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t(ui.library)}</div>
        <h1 className="lesson-title">{t(ui.resources)}</h1>
        <p className="lesson-summary">{t(ui.resourcesDesc)}</p>
      </div>
      {Object.entries(groups).map(([group, items]) => (
        <div key={group} className="section">
          <h3 className="section-heading">{t(groupLabels[group])}</h3>
          <ul className="resource-list">
            {items.map((r) => (
              <li key={r.href}>
                <a href={r.href} download>
                  <Icon name="download" size={16} />
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function Workshops() {
  const { t } = useI18n();
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t(ui.practice)}</div>
        <h1 className="lesson-title">{t(ui.workshops)}</h1>
        <p className="lesson-summary">{t(ui.workshopsDesc)}</p>
      </div>
      <ul className="resource-list">
        {workshops.map((w) => (
          <li key={w.href}>
            <a href={w.href} download>
              <Icon name="download" size={16} />
              {w.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function References() {
  const { t } = useI18n();
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t(ui.library)}</div>
        <h1 className="lesson-title">{t(ui.references)}</h1>
        <p className="lesson-summary">{t(ui.referenceDesc)}</p>
      </div>
      <ul className="resource-list">
        {references.map((r, i) => (
          <li key={i}>
            <a href={r.url || '#'} target="_blank" rel="noreferrer">
              <Icon name="external" size={16} />
              <span>
                <strong>{r.title}</strong>
                <br />
                <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>{r.author}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function LessonView({
  lesson,
  moduleName,
  done,
  onToggleDone,
  prev,
  next,
  go,
}: {
  lesson: Lesson;
  moduleName: string;
  done: boolean;
  onToggleDone: () => void;
  prev: Lesson | null;
  next: Lesson | null;
  go: (v: View) => void;
}) {
  const { t, tArr } = useI18n();
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">
          {moduleName} · {t(lesson.category)}
        </div>
        <h1 className="lesson-title">{t(lesson.title)}</h1>
        <p className="lesson-summary">{t(lesson.summary)}</p>
        <div className="lesson-actions">
          <button className={`btn primary ${done ? 'ghost' : ''}`} onClick={onToggleDone}>
            <Icon name="check" size={15} />
            {done ? t(ui.completed) : t(ui.markDone)}
          </button>
        </div>
      </div>

      {lesson.outcomes.length > 0 && (
        <div className="outcomes">
          <div className="outcomes-title">{t(ui.lessonOutcomes)}</div>
          <ul>
            {tArr(lesson.outcomes).map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="toc">
        <div className="toc-title">{t(ui.contents)}</div>
        <ul>
          {lesson.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{t(s.heading)}</a>
            </li>
          ))}
        </ul>
      </div>

      {lesson.sections.map((s) => (
        <section key={s.id} id={s.id} className="section">
          <h2 className="section-heading">{t(s.heading)}</h2>
          {s.blocks.map((b, i) => (
            <BlockRenderer key={i} block={b} />
          ))}
        </section>
      ))}

      {(lesson.resources.length > 0 || lesson.workshop) && (
        <div className="section">
          <h3 className="section-heading">{t(ui.materials)}</h3>
          {lesson.resources.length > 0 && (
            <ul className="resource-list">
              {lesson.resources.map((r) => (
                <li key={r.href}>
                  <a href={r.href} download>
                    <Icon name="download" size={16} />
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {lesson.workshop && (
            <ul className="resource-list" style={{ marginTop: 10 }}>
              <li>
                <a href={lesson.workshop.href} download>
                  <Icon name="download" size={16} />
                  {lesson.workshop.label}
                </a>
              </li>
            </ul>
          )}
        </div>
      )}

      <div className="lesson-footer">
        {prev ? (
          <button className="btn" onClick={() => go({ kind: 'lesson', lessonId: prev.id })}>
            <Icon name="arrow-left" size={15} />
            {t(prev.title)}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button className="btn" onClick={() => go({ kind: 'lesson', lessonId: next.id })}>
            {t(next.title)}
            <Icon name="arrow" size={15} />
          </button>
        ) : (
          <span />
        )}
      </div>
    </>
  );
}
