import { useMemo, useState } from 'react';
import { Icon } from './components/Icon';
import { BlockRenderer } from './components/BlockRenderer';
import { modules, allLessons, references, resources, workshops } from './data';
import { courseInfo, type Lesson } from './data/types';
import { useProgress } from './hooks/useLocalStorage';

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
  }, [query]);

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
            placeholder="Tìm bài học..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() ? (
          <div className="search-results">
            {searchResults.length === 0 && <div className="empty">Không tìm thấy kết quả</div>}
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
              <div className="nav-group-title">Tổng quan</div>
              <NavItem icon="home" label="Trang chủ" active={view.kind === 'home'} onClick={() => go({ kind: 'home' })} />
              <NavItem icon="book" label="Tài nguyên" active={view.kind === 'resources'} onClick={() => go({ kind: 'resources' })} />
              <NavItem icon="list" label="Workshops" active={view.kind === 'workshops'} onClick={() => go({ kind: 'workshops' })} />
              <NavItem icon="sparkles" label="Tài liệu tham khảo" active={view.kind === 'references'} onClick={() => go({ kind: 'references' })} />
              <NavItem icon="cube" label="Giới thiệu môn" active={view.kind === 'about'} onClick={() => go({ kind: 'about' })} />
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
              <div className="nav-group-title">Tiến độ học tập</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="progress-text">
                <span>{completedCount}/{totalLessons} bài</span>
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
            {view.kind === 'home' && <span className="crumb-current">Trang chủ</span>}
            {view.kind === 'lesson' && currentLesson && (
              <>
                <span>{currentLesson.category}</span>
                <span>›</span>
                <span className="crumb-current">{currentLesson.title}</span>
              </>
            )}
            {view.kind === 'resources' && <span className="crumb-current">Tài nguyên</span>}
            {view.kind === 'workshops' && <span className="crumb-current">Workshops</span>}
            {view.kind === 'references' && <span className="crumb-current">Tài liệu tham khảo</span>}
            {view.kind === 'about' && <span className="crumb-current">Giới thiệu môn</span>}
          </div>
          {currentLesson && (
            <div className="topbar-actions">
              <button
                className={`icon-btn ${progress.isBookmarked(currentLesson.id) ? 'active' : ''}`}
                title="Lưu bài"
                onClick={() => progress.toggleBookmark(currentLesson.id)}
              >
                <Icon name="bookmark" />
              </button>
            </div>
          )}
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
              moduleName={currentModule?.title || ''}
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
            <span className="hero-meta-label">Mã môn</span>
            <span className="hero-meta-value">{courseInfo.code}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Tiên quyết</span>
            <span className="hero-meta-value">{courseInfo.prerequisite}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Số bài học</span>
            <span className="hero-meta-value">{allLessons.length}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Đã hoàn thành</span>
            <span className="hero-meta-value">{progress.completed.length}/{allLessons.length}</span>
          </div>
        </div>
      </section>

      <h2 className="section-heading">Hành trình học tập</h2>
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
                <span>{m.lessons.length} bài</span>
                <span>
                  {doneCount}/{m.lessons.length} ✓
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-divider" />

      <h2 className="section-heading">Mục tiêu học tập</h2>
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

function About() {
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">Về môn học</div>
        <h1 className="lesson-title">{courseInfo.title}</h1>
        <p className="lesson-summary">{courseInfo.description}</p>
      </div>
      <div className="outcomes">
        <div className="outcomes-title">Mục tiêu học tập (Learning Outcomes)</div>
        <ul>
          {courseInfo.outcomes.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>
      <h3 className="section-heading">Chính sách học thuật</h3>
      <p className="block-p">
        Gian lận, đạo văn và vi phạm bản quyền là các vi phạm nghiêm trọng. Gian lận trong kiểm tra được hiểu là nói
        chuyện, nhìn bài bạn hay bất kỳ cách truyền thông bí mật nào. Đạo văn là sử dụng công sức người khác mà không
        trích dẫn. Vi phạm bản quyền là sao chép tài liệu mà không xin phép chủ sở hữu.
      </p>
    </>
  );
}

function Resources() {
  const groups = resources.reduce<Record<string, typeof resources>>((acc, r) => {
    (acc[r.group] ||= []).push(r);
    return acc;
  }, {});
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">Thư viện</div>
        <h1 className="lesson-title">Tài nguyên</h1>
        <p className="lesson-summary">Slide bài giảng và tài liệu đọc thêm cho toàn bộ môn học.</p>
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

function Workshops() {
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">Thực hành</div>
        <h1 className="lesson-title">Workshops</h1>
        <p className="lesson-summary">Bài thực hành áp dụng kiến thức từng chương.</p>
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
  return (
    <>
      <div className="lesson-header">
        <div className="lesson-eyebrow">Thư viện</div>
        <h1 className="lesson-title">Tài liệu tham khảo</h1>
        <p className="lesson-summary">Sách và nguồn tham khảo chính thức của môn học.</p>
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
            {done ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
          </button>
        </div>
      </div>

      {L.outcomes?.length > 0 && (
        <div className="outcomes">
          <div className="outcomes-title">Mục tiêu bài học</div>
          <ul>
            {L.outcomes.map((o: string, i: number) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="toc">
        <div className="toc-title">Nội dung</div>
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
          <h3 className="section-heading">Tài liệu & Workshop</h3>
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
