import Link from "next/link";
import Image from "next/image";

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL!;

const primaryButtonClass =
  "inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-md font-semibold text-white transition hover:bg-primary-hover";

const secondaryButtonClass =
  "h-10 items-center justify-center px-4 text-md font-semibold transition hover:text-text-secondary";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-3 px-6 md:py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/jend_logo.svg"
            alt="Jend Logo"
            width={86}
            height={28}
            priority
          />
        </Link>

        <nav className="flex items-center gap-2 md:gap-3">
          <Link
            href={`${dashboardUrl}/sign-in`}
            className={`hidden md:inline-flex ${secondaryButtonClass}`}
          >
            Sign in
          </Link>

          <Link href={`${dashboardUrl}/sign-up`} className={primaryButtonClass}>
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
