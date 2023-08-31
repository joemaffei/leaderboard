import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <section>
        <Link
          href="/leaderboard/create"
          className="bg-amber-500 text-black rounded p-2 font-bold px-6 py-4"
        >
          Create a leaderboard
        </Link>
      </section>
    </main>
  );
}
