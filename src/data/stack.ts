import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApachekafka,
  SiApachenifi,
  SiDart,
  SiDocker,
  SiElectron,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiKotlin,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type Tech = {
  name: string;
  Icon: IconType;
  color: string;
  note?: string;
  details?: string[];
};

export const techGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Mobile",
    items: [
      {
        name: "Flutter",
        Icon: SiFlutter,
        color: "#02569B",
        note: "Primary",
        details: [
          "Dart",
          "BLOC Pattern",
          "Clean Architecture",
          "Native Interop (Platform Channels / FFI)",
          "Performance Optimization",
        ],
      },
      { name: "Dart", Icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF", note: "Jetpack Compose" },
      { name: "Android", Icon: SiAndroid, color: "#3DDC84" },
      { name: "Swift", Icon: SiSwift, color: "#F05138", note: "iOS" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#666666" },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#41B883" },
      { name: "Electron", Icon: SiElectron, color: "#47848F" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Go (Fiber)", Icon: SiGo, color: "#00ADD8" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      { name: "Apache NiFi", Icon: SiApachenifi, color: "#728E9B" },
      { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
    ],
  },
  {
    title: "Tooling & Practices",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },
];

const flat: Tech[] = techGroups.flatMap((g) => g.items);

const alias: Record<string, string> = {
  "Flutter (Dart)": "Flutter",
  "Fiber (Golang)": "Go (Fiber)",
  Golang: "Go (Fiber)",
  "Android (Kotlin / Jetpack Compose)": "Android",
  "Nest.js": "NestJS",
  "Electron.js": "Electron",
  "Vue.js": "Vue.js",
  GraphQL: "GraphQL",
  "Apache NiFi": "Apache NiFi",
  "E2E Testing": "CI/CD",
  "Unit Testing": "CI/CD",
  "Integration Testing": "CI/CD",
  BLOC: "Flutter",
};

export function skillTech(skill: string): Tech | undefined {
  const key = alias[skill] ?? skill;
  return flat.find((t) => t.name === key);
}
