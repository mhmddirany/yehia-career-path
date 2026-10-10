import Link from "next/link";

export default function OpportunitiesPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Opportunities</h1>
      <p className="mt-4">Coming in Chapter 3.</p>
      <Link href="/" className="mt-6 inline-block underline">
        ← Back home
      </Link>
    </main>
  );
}