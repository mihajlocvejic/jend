import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectContextSection } from "@/components/ProjectContextSection";

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL!;

export default async function MarketingHomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect(dashboardUrl);
  }

  return (
    <main className="relative overflow-hidden bg-background text-text">
      <Navbar />
      <HeroSection />
      <ProjectContextSection />
    </main>
  );
}
