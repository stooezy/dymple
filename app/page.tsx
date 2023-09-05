import { ThemeToggle } from "@/components/sites/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto flex flex-col space-y-4">
        <div className="w-full py-4 flex justify-between">
          <div>dy</div>
          <ThemeToggle />
        </div>
        <h1 className="text-center">Hello World</h1>
      </div>
    </main>
  );
}
