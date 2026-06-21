import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Laser.dev",
    template: "%s | Laser.dev",
  },
  description:
    "Personal technology platform for Miguel Da Silva, focused on AI, backend engineering, architecture, delivery leadership, fintech, open source, and AIR.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
