import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { resume } from "@/data/resume";
import { skillTech, techGroups } from "@/data/stack";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { IconType } from "react-icons";

function SectionTitle({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: IconType;
}) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="size-4 text-muted-foreground" />}
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Backdrop accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] overflow-hidden print:hidden"
      >
        <div className="absolute left-1/2 top-[-10rem] size-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] top-[-6rem] size-[18rem] rounded-full bg-[oklch(0.65_0.24_300)]/10 blur-3xl" />
        <div className="absolute left-[8%] top-[2rem] size-[16rem] rounded-full bg-[oklch(0.75_0.18_180)]/10 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur print:hidden">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
          <span className="text-sm font-semibold tracking-tight">
            {resume.name}
            <span className="ml-2 hidden text-xs font-normal text-muted-foreground sm:inline">
              {resume.title}
            </span>
          </span>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Image
              src="/avatar.jpg"
              alt="Donnukrit Satirakul"
              width={96}
              height={96}
              priority
              className="size-24 shrink-0 rounded-2xl border object-cover shadow-sm"
            />
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4" /> Hello, I&apos;m
              </p>
              <h1 className="mt-1 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                {resume.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{resume.title}</p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            {resume.summary}
          </p>

          {/* Quick facts */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {resume.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="size-3.5" /> ScbX (PointX)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="size-3.5" /> Prince of Songkla University
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-2">
            <Button
              render={<a href={`mailto:${resume.email}`} />}
              className="gap-1.5"
            >
              <Mail className="size-4" /> Get in touch
            </Button>
            <Button
              variant="outline"
              render={
                <a href={resume.github} target="_blank" rel="noreferrer" />
              }
              className="gap-1.5"
            >
              <Code2 className="size-4" /> GitHub
              <ArrowUpRight className="size-3.5 opacity-60" />
            </Button>
          </div>

          {/* Top skills */}
          <div className="mt-8 flex flex-wrap gap-1.5">
            {resume.topSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Tech stack */}
        <section className="py-14">
          <SectionTitle icon={Code2}>Tech Stack</SectionTitle>
          <div className="mt-6 space-y-8">
            {techGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium text-muted-foreground">{group.title}</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((tech) => (
                    <div
                      key={`${group.title}-${tech.name}`}
                      className={`rounded-xl border bg-card/50 px-3.5 py-3 transition-colors hover:bg-muted/50 ${
                        tech.details
                          ? "sm:col-span-2 flex flex-col gap-2.5"
                          : "flex items-center gap-3"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <tech.Icon
                          className="size-6 shrink-0"
                          style={{ color: tech.color }}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="truncate text-base font-medium">{tech.name}</p>
                          {tech.note && (
                            <p className="truncate text-xs text-muted-foreground">
                              {tech.note}
                            </p>
                          )}
                        </div>
                      </div>
                      {tech.details && (
                        <ul className="flex flex-wrap gap-1.5">
                          {tech.details.map((detail) => (
                            <li
                              key={detail}
                              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section className="py-14">
          <SectionTitle icon={Briefcase}>Working Experience</SectionTitle>
          <ol className="mt-6 space-y-10 border-l border-border/70 pl-6">
            {resume.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold">
                    {job.role} · <span className="font-normal">{job.company}</span>
                  </h3>
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.type} · {job.location}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => {
                    const tech = skillTech(skill);
                    return (
                      <Badge key={skill} variant="outline" className="gap-1.5 font-normal">
                        {tech && (
                          <tech.Icon
                            className="size-3.5"
                            style={{ color: tech.color }}
                            aria-hidden
                          />
                        )}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
                {job.projects.length > 0 && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/80">Projects:</span>{" "}
                    {job.projects.join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <Separator />

        {/* Skills grid */}
        <section className="py-14">
          <SectionTitle icon={Sparkles}>Skills &amp; Expertise</SectionTitle>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {Object.entries(resume.skills).map(([group, items]) => (
              <div key={group} className="rounded-xl border bg-card/50 p-4">
                <h3 className="text-sm font-medium text-muted-foreground">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((skill) => {
                    const tech = skillTech(skill);
                    return (
                      <Badge key={skill} variant="secondary" className="gap-1.5 font-normal">
                        {tech && (
                          <tech.Icon
                            className="size-3.5"
                            style={{ color: tech.color }}
                            aria-hidden
                          />
                        )}
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Education */}
        <section className="py-14">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="mt-6 rounded-xl border bg-card/50 p-4">
            <h3 className="text-base font-semibold">{resume.education.degree}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {resume.education.school} · {resume.education.year}
            </p>
          </div>
        </section>

        <footer className="border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <p>
            {resume.name} ·{" "}
            <a className="underline-offset-4 hover:underline" href={`mailto:${resume.email}`}>
              {resume.email}
            </a>{" "}
            ·{" "}
            <a
              className="underline-offset-4 hover:underline"
              href={resume.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/xSengPed
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
