import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlueWave Plumbing | Fast, Friendly, Reliable",
  description:
    "Trusted local plumbers for leaks, clogs, installs and emergencies. Same-day service. Upfront pricing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-gradient-to-b from-brand-50 via-white to-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
