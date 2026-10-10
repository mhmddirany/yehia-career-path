import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <p className="text-sm uppercase tracking-wide text-gray-500">
        Chapter 1 · The starting point
      </p>
      <h1 className="mt-2 text-3xl font-bold">Meet Yehia</h1>
      <p className="mt-4">
        Yehia has just finished learning the basics of web development and is
        ready for his next step. He builds small projects, learns fast, and
        wants to turn that energy into real work.
      </p>

      <h2 className="mt-8 text-xl font-semibold">His two-month goal</h2>
      <p className="mt-2">
        Within two months, Yehia wants to land his first junior developer role
        or internship by following a clear plan and applying only to
        opportunities that fit him.
      </p>

      <nav className="mt-8 flex gap-4">
        <Link href="/plan" className="rounded bg-black px-4 py-2 text-white">
          See his plan
        </Link>
        <Link href="/opportunities" className="rounded border px-4 py-2">
          Explore opportunities
        </Link>
      </nav>
    </main>
  );
}