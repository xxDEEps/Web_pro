import { useMemo, useState } from 'react';
import { Icon } from './components/Icon';
import { BlockRenderer } from './components/BlockRenderer';
import { getModules, getAllLessons, references, resources, workshops, ui } from './data';
import { courseInfoEn, courseInfoVi, type Lesson, type CourseInfo, type CourseModule } from './data/types';
import { useProgress } from './hooks/useLocalStorage';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import type { UIStrings } from './data';

type View =
  | { kind: 'home' }
  | { kind: 'lesson'; lessonId: string }
  | { kind: 'resources' }
  | { kind: 'references' }
  | { kind: 'workshops' }
  | { kind: 'about' };

export function App() {
  const [view, setView] = useState<View>({ kind: 'home' });
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const progress = useProgress();
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLanguage();
  const t = ui[lang];
  const courseInfo = lang === 'vi' ? courseInfoVi : courseInfoEn;

  const modules = useMemo(() => getModules(lang), [lang]);
  const allLessons = useMemo(() => getAllLessons(lang), [lang]);

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
      const hay = (l.title + ' ' + l.summary + ' ' + l.category + ' ' + l.outcomes.join(' ')).toLowerCase();
      return hay.includes(q);
    });
  }, [query, allLessons]);

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
            <span className="brand-sub">FPT · OOP Java</span>
          </div>
        </div>

        <div className="search">
          <span className="search-icon">
            <Icon name="search" size={16} />
          </span>
          <input
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() ? (
          <div className="search-results">
            {searchResults.length === 0 && <div className="empty">{t.noResults}</div>}
            {searchResults.map((l) => (
              <div key={l.id} className="search-result" onClick={() => go({ kind: 'lesson', lessonId: l.id })}>
                <div className="sr-cat">{l.category}</div>
                <div className="sr-title">{highlightMatch(l.title, query)}</div>
                <div className="sr-summary">{highlightMatch(l.summary, query)}</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="nav-group">
              <div className="nav-group-title">{t.overview}</div>
              <NavItem icon="home" label={t.home} active={view.kind === 'home'} onClick={() => go({ kind: 'home' })} />
              <NavItem icon="book" label={t.resources} active={view.kind === 'resources'} onClick={() => go({ kind: 'resources' })} />
              <NavItem icon="list" label={t.workshops} active={view.kind === 'workshops'} onClick={() => go({ kind: 'workshops' })} />
              <NavItem icon="sparkles" label={t.references} active={view.kind === 'references'} onClick={() => go({ kind: 'references' })} />
              <NavItem icon="cube" label={t.about} active={view.kind === 'about'} onClick={() => go({ kind: 'about' })} />
            </div>

            {modules.map((m) => (
              <div className="nav-group" key={m.id}>
                <div className="nav-group-title">{m.part}</div>
                {m.lessons.map((l) => (
                  <NavItem
                    key={l.id}
                    icon={l.icon}
                    label={l.title}
                    active={view.kind === 'lesson' && view.lessonId === l.id}
                    onClick={() => go({ kind: 'lesson', lessonId: l.id })}
                    done={progress.isCompleted(l.id)}
                  />
                ))}
              </div>
            ))}

            <div className="nav-extra">
              <div className="nav-group-title">{t.progress}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="progress-text">
                <span>{completedCount}/{totalLessons} {t.lessonsCount}</span>
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
            {view.kind === 'home' && <span className="crumb-current">{t.breadcrumbHome}</span>}
            {view.kind === 'lesson' && currentLesson && (
              <>
                <span>{currentLesson.category}</span>
                <span>›</span>
                <span className="crumb-current">{currentLesson.title}</span>
              </>
            )}
            {view.kind === 'resources' && <span className="crumb-current">{t.breadcrumbResources}</span>}
            {view.kind === 'workshops' && <span className="crumb-current">{t.breadcrumbWorkshops}</span>}
            {view.kind === 'references' && <span className="crumb-current">{t.breadcrumbReferences}</span>}
            {view.kind === 'about' && <span className="crumb-current">{t.breadcrumbAbout}</span>}
          </div>
          {currentLesson && (
            <div className="topbar-actions">
              <button
                className={`icon-btn ${progress.isBookmarked(currentLesson.id) ? 'active' : ''}`}
                title={t.saveLesson}
                onClick={() => progress.toggleBookmark(currentLesson.id)}
              >
                <Icon name="bookmark" />
              </button>
            </div>
          )}
          <button
            className="icon-btn lang-toggle"
            title={lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English'}
            onClick={toggleLang}
          >
            <span className="lang-label">{lang === 'en' ? 'VI' : 'EN'}</span>
          </button>
          <button
            className="icon-btn theme-toggle"
            title={theme === 'dark' ? t.switchLight : t.switchDark}
            onClick={toggle}
          >
            <span className="icon-wrap">
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            </span>
          </button>
        </header>

        <main className="content">
          {view.kind === 'home' && <Home onOpen={go} progress={progress} t={t} courseInfo={courseInfo} modules={modules} allLessons={allLessons} />}
          {view.kind === 'about' && <About t={t} courseInfo={courseInfo} />}
          {view.kind === 'resources' && <Resources t={t} />}
          {view.kind === 'workshops' && <Workshops t={t} />}
          {view.kind === 'references' && <References t={t} />}
          {view.kind === 'lesson' && currentLesson && (
            <LessonView
              lesson={currentLesson}
              moduleName={currentModule?.title || ''}
              done={progress.isCompleted(currentLesson.id)}
              onToggleDone={() => progress.toggleComplete(currentLesson.id)}
              prev={prevLesson}
              next={nextLesson}
              go={go}
              t={t}
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
  t,
  courseInfo,
  modules,
  allLessons,
}: {
  onOpen: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
  t: UIStrings;
  courseInfo: CourseInfo;
  modules: CourseModule[];
  allLessons: Lesson[];
}) {
  return (
    <>
      <section className="hero">
        <span className="hero-tag">
          <Icon name="sparkles" size={14} />
          {courseInfo.code} · {courseInfo.university}
        </span>
        <h1>{courseInfo.title}</h1>
        <p>{courseInfo.description}</p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t.courseCode}</span>
            <span className="hero-meta-value">{courseInfo.code}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t.prerequisite}</span>
            <span className="hero-meta-value">{courseInfo.prerequisite}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t.lessonCount}</span>
            <span className="hero-meta-value">{allLessons.length}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">{t.completedCount}</span>
            <span className="hero-meta-value">{progress.completed.length}/{allLessons.length}</span>
          </div>
        </div>
      </section>

      <h2 className="section-heading">{t.learningJourney}</h2>
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
              <h3>{m.title}</h3>
              <p>{m.description}</p>
              <div className="card-meta">
                <span>{m.lessons.length} {t.lessonsCount}</span>
                <span>
                  {doneCount}/{m.lessons.length} ✓
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-divider" />

      <h2 className="section-heading">{t.learningOutcomes}</h2>
      <div className="outcomes">
        <ul>
          {courseInfo.outcomes.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function About({ t, courseInfo }: { t: UIStrings; courseInfo: CourseInfo }) {
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t.aboutEyebrow}</div>
        <h1 className="lesson-title">{courseInfo.title}</h1>
        <p className="lesson-summary">{courseInfo.description}</p>
      </div>
      <div className="outcomes">
        <div className="outcomes-title">{t.learningOutcomes}</div>
        <ul>
          {courseInfo.outcomes.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>
      <h3 className="section-heading">{t.academicPolicy}</h3>
      <p className="block-p">{t.policyText}</p>
    </>
  );
}

function Resources({ t }: { t: UIStrings }) {
  const groups = resources.reduce<Record<string, typeof resources>>((acc, r) => {
    (acc[r.group] ||= []).push(r);
    return acc;
  }, {});
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t.library}</div>
        <h1 className="lesson-title">{t.resources}</h1>
        <p className="lesson-summary">{t.resourcesSummary}</p>
      </div>
      {Object.entries(groups).map(([group, items]) => (
        <div key={group} className="section">
          <h3 className="section-heading">{group}</h3>
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

function Workshops({ t }: { t: UIStrings }) {
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t.practice}</div>
        <h1 className="lesson-title">{t.workshops}</h1>
        <p className="lesson-summary">{t.workshopsSummary}</p>
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

function References({ t }: { t: UIStrings }) {
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">{t.library}</div>
        <h1 className="lesson-title">{t.references}</h1>
        <p className="lesson-summary">{t.referencesSummary}</p>
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
  t,
}: {
  lesson: Lesson;
  moduleName: string;
  done: boolean;
  onToggleDone: () => void;
  prev: Lesson | null;
  next: Lesson | null;
  go: (v: View) => void;
  t: UIStrings;
}) {
  const L = lesson;
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">
          {moduleName} · {L.category}
        </div>
        <h1 className="lesson-title">{L.title}</h1>
        <p className="lesson-summary">{L.summary}</p>
        <div className="lesson-actions">
          <button className={`btn primary ${done ? 'ghost' : ''}`} onClick={onToggleDone}>
            <Icon name="check" size={15} />
            {done ? t.done : t.markDone}
          </button>
        </div>
      </div>

      {L.outcomes?.length > 0 && (
        <div className="outcomes">
          <div className="outcomes-title">{t.lessonObjectives}</div>
          <ul>
            {L.outcomes.map((o: string, i: number) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="toc">
        <div className="toc-title">{t.contents}</div>
        <ul>
          {L.sections.map((s: any) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.heading}</a>
            </li>
          ))}
        </ul>
      </div>

      {L.sections.map((s: any) => (
        <section key={s.id} id={s.id} className="section">
          <h2 className="section-heading">{s.heading}</h2>
          {s.blocks.map((b: any, i: number) => (
            <BlockRenderer key={i} block={b} />
          ))}
        </section>
      ))}

      {(L.resources?.length > 0 || L.workshop) && (
        <div className="section">
          <h3 className="section-heading">{t.materialsWorkshop}</h3>
          {L.resources?.length > 0 && (
            <ul className="resource-list">
              {L.resources.map((r: any) => (
                <li key={r.href}>
                  <a href={r.href} download>
                    <Icon name="download" size={16} />
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {L.workshop && (
            <ul className="resource-list" style={{ marginTop: 10 }}>
              <li>
                <a href={L.workshop.href} download>
                  <Icon name="download" size={16} />
                  {L.workshop.label}
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
            {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button className="btn" onClick={() => go({ kind: 'lesson', lessonId: next.id })}>
            {next.title}
            <Icon name="arrow" size={15} />
          </button>
        ) : (
          <span />
        )}
      </div>
    </>
  );
}
