import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MarketingHomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect(process.env.NEXT_PUBLIC_DASHBOARD_URL!);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Jend</h1>
        <p className="text-gray-600">Marketing sajt za neulogovane korisnike.</p>
        <Link
          href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-in`}
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}