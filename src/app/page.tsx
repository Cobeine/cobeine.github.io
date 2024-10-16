import { MainPort } from "@/components/component/main-port";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainPort />
      <Analytics />
    </main>
  );
}
