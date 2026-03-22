import Link from "next/link";

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL!;

const primaryButtonClass =
  "inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-md font-semibold text-white transition hover:bg-primary-hover";

const outlinedButtonClass =
  "inline-flex h-10 items-center justify-center rounded-md border border-border-light px-4 text-md font-semibold transition hover:text-text-secondary";

export function HeroSection() {
  return (
    <section className="py-22 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-2.5 py-1 text-xs text-text-secondary sm:gap-2 sm:px-3 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Built for modern outbound sales teams</span>
          </div>

          <h1 className="max-w-120 text-4xl font-semibold tracking-[-0.04em] leading-[0.97] sm:max-w-150 sm:text-5xl md:max-w-4xl md:text-6xl lg:text-7xl mt-3">
            Run cold email campaigns without the usual mess.
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium leading-[1.4] tracking-[-0.01em] text-text-secondary sm:text-lg md:mt-8 md:leading-normal lg:leading-[1.6]">
            Jend gives you one place to launch sequences, manage inboxes, track
            conversations, and keep outreach moving — without stitching together
            five different tools.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 self-stretch sm:w-auto sm:flex-row sm:items-center sm:self-center md:mt-8">
            <Link
              href={`${dashboardUrl}/sign-up`}
              className={`${primaryButtonClass} w-full sm:w-auto`}
            >
              Get started
            </Link>

            <Link
              href={`${dashboardUrl}/sign-in`}
              className={`${outlinedButtonClass} w-full sm:w-auto`}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
