import { query, singleton } from "#contentrain";
import { DashboardShell } from "./dashboard-shell";

export default function HomePage() {
  const copy = singleton("dashboard-overview").locale("en").get();
  const ui = query("dashboard-stat").locale("en").all();
  const queue = query("work-queue-item").locale("en").all();
  const notices = query("ops-notice").locale("en").all();
  const audit = query("audit-event").locale("en").sort("timestamp", "desc").limit(3).all();

  return (
    <DashboardShell
      activePath="/"
      kicker={copy.eyebrow ?? "Overview"}
      title={copy.title}
      description={copy.summary}
    >
      <section className="hero-banner surface">
        <div>
          <span className="pill">{copy.environment_badge}</span>
          <p className="muted">{copy.status_note}</p>
        </div>
        <a href={copy.primary_cta_href ?? "/settings"} className="button">
          {copy.primary_cta_label ?? "Open settings"}
        </a>
      </section>

      <section className="section-block">
        <h2>Operational metrics</h2>
        <div className="stat-grid">
          {ui.map((item) => (
            <article key={item.id} className="surface stat-card">
              <span className="muted">{item.label}</span>
              <strong>{item.value}</strong>
              <span className={`delta ${item.trend ?? "steady"}`}>{item.delta}</span>
              <p className="muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="content-grid">
        <section className="section-block">
          <h2>Launch queue</h2>
          <div className="stack">
            {queue.map((item) => (
              <article key={item.id} className="surface queue-card">
                <div className="queue-head">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="muted">{item.summary}</p>
                  </div>
                  <span className={`pill tone-${item.status ?? "queued"}`}>{item.status}</span>
                </div>
                <div className="meta-row muted">
                  <span>{item.owner}</span>
                  <span>{item.due_label}</span>
                  <a href={item.href ?? "/operations"} className="text-link">
                    Open
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Operator notices</h2>
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
      </div>

      <section className="section-block">
        <h2>Recent audit events</h2>
        <div className="stack">
          {audit.map((event) => (
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
