import { useId } from "react";

/**
 * TODO: if not logged in, redirect to login
 */
export default function Home() {
  const inputName = useId();

  async function handleAction(formData: FormData) {
    "use server";
    const leaderboardName = formData.get(inputName);
  }

  return (
    <main className="p-8">
      <form className="flex flex-col gap-4" action={handleAction}>
        <label className="flex flex-col gap-2 dark:text-rose-400">
          What&apos;s the name of your leaderboard?
          <input
            type="text"
            id={inputName}
            name={inputName}
            className="px-6 py-4 text-black font-bold text-3xl rounded"
          />
        </label>
        <button
          type="submit"
          className="bg-amber-500 text-black rounded font-bold px-6 py-4"
        >
          Next
        </button>
      </form>
    </main>
  );
}
