import Image from "next/image"

import { ThemeToggle } from "@/components/sites/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto flex flex-col space-y-4">
        <div className="flex w-full justify-between px-4 py-4">
          <div>dy</div>
          <ThemeToggle />
        </div>
        <h1 className="text-center">Hello World</h1>
      </div>
    </main>
  )
}
