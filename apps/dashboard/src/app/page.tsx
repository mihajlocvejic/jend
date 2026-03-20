import { UserButton } from "@clerk/nextjs";

export default function DashboardHomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">Ulogovan si.</p>
        <UserButton />
      </div>
    </main>
  );
}