import { stressTestPrinciples, stressTests } from "@/content/stress-tests/stress-tests";

export default function StressTestsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">Governance Layer</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Stress Tests</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
        Creative Bridge is pressure-tested against the incentives most likely to distort a public creative standard:
        status, engagement, marketplace capture, synthetic volume, governance deadlock, and monetization drift.
      </p>

      <section className="mt-12 grid gap-5">
        {stressTests.map((test) => (
          <article key={test.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-medium">{test.title}</h2>
            <dl className="mt-5 grid gap-4 md:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Risk</dt>
                <dd className="mt-2 text-neutral-700">{test.risk}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Failure Mode</dt>
                <dd className="mt-2 text-neutral-700">{test.failureMode}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Response</dt>
                <dd className="mt-2 text-neutral-700">{test.response}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-2xl font-medium">Stress-Test Principles</h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-neutral-700">
          {stressTestPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
