import { query } from "#contentrain";
import { DashboardShell } from "../dashboard-shell";

export default function OperationsPage() {
  const notices = query("ops-notice").locale("en").all();
  const queue = query("work-queue-item").locale("en").all();
  const events = query("audit-event").locale("en").sort("timestamp", "desc").all();

  return (
    <DashboardShell
      activePath="/operations"
      kicker="Operations"
      title="Keep rollout warnings, review states, and audit language out of framework glue."
      description="Operational surfaces change constantly. They should be editable as content, not hidden behind deploy-only component text."
    >
      <div className="content-grid">
        <section className="section-block">
          <h2>Active notices</h2>
          <div className="stack">
            {notices.map((notice) => (
              <article key={notice.id} className="surface notice-card">
                <div className="queue-head">
                  <h3>{notice.title}</h3>
                  <span className={`pill tone-${notice.tone ?? "info"}`}>{notice.tone}</span>
                </div>
                <p className="muted">{notice.body}</p>
                {notice.cta_href ? (
                  <a href={notice.cta_href} className="text-link">
                    {notice.cta_label ?? "Open"}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Open queue items</h2>
          <div className="stack">
            {queue.map((item) => (
              <article key={item.id} className="surface queue-card">
                <div className="queue-head">
                  <h3>{item.title}</h3>
                  <span className={`pill tone-${item.priority ?? "medium"}`}>{item.priority}</span>
                </div>
                <p className="muted">{item.summary}</p>
                <div className="meta-row muted">
                  <span>{item.owner}</span>
                  <span>{item.due_label}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="section-block">
        <h2>Audit stream</h2>
        <div className="stack">
          {events.map((event) => (
            <article key={event.id} className="surface audit-card">
              <div className="queue-head">
                <div>
                  <h3>{event.title}</h3>
                  <p className="muted">
                    {event.actor} · {event.target}
                  </p>
                </div>
                <span className={`pill tone-${event.severity ?? "info"}`}>{event.severity}</span>
              </div>
              <p className="muted">{event.summary}</p>
              <div className="meta-row muted">
                <span>{event.timestamp}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
