import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – Auto-generate changelogs from git commits & PRs",
  description: "Analyzes git history, PR descriptions, and issue links to automatically generate user-friendly changelogs for product releases."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f304e1a0-86a3-4cd4-ac75-1fb4256fa326"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
