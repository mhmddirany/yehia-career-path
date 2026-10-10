import Link from "next/link";

const milestones = [
  {
    step: 1,
    title: "Prepare",
    description: "Get the basics ready so every application starts strong.",
    actions: [
      "Update his CV with his latest projects and skills",
      "Organize his portfolio around his three best projects",
      "Choose one target role, such as junior front-end developer",
    ],
  },
  {
    step: 2,
    title: "Practice",
    description: "Close the gap between what he knows and what the role needs.",
    actions: [
      "Practice the skills that appear most in job posts",
      "Build one small project that shows those skills",
      "Rehearse common interview questions out loud",
    ],
  },
  {
    step: 3,
    title: "Apply",
    description: "Send focused applications and keep track of each one.",
    actions: [
      "Shortlist opportunities that match his target role",
      "Submit a few tailored applications each week",
      "Follow up about a week after applying",
    ],
  },
];

export default function PlanPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <p className="text-sm uppercase tracking-wide text-gray-500">
        Chapter 2 · The plan
      </p>
      <h1 className="mt-2 text-3xl font-bold">Yehia's plan</h1>
      <p className="mt-4">
        He doesn't need to do everything today, only to know his next step.
      </p>

      <ol className="mt-8 space-y-6">
        {milestones.map((m) => (
          <li key={m.step} className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold">
              {m.step}. {m.title}
            </h2>
            <p className="mt-2">{m.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {m.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <Link href="/" className="mt-8 inline-block underline">
        ← Back home
      </Link>
    </main>
  );
}