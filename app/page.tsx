import Image from "next/image"

import { IcGithub } from "@/components/icons/ic-github"
import { IcInstagram } from "@/components/icons/ic-instagram"
import { IcSpotify } from "@/components/icons/ic-spotify"
import { ThemeToggle } from "@/components/sites/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto flex flex-col space-y-4">
        <div className="flex w-full items-center justify-between py-4">
          <div className="typography">
            <p>dy</p>
          </div>
          <ThemeToggle />
        </div>
        <div className="typography">
          <h1 className="py-12">Hello World</h1>
          <p>
            Hi! I am{" "}
            <span className="text-jade-11 font-bold">Yoga Permana.</span>
          </p>

          <p>
            Working as a{" "}
            <span className="text-jade-11 font-bold">Fullstack Developer.</span>
          </p>

          <p>Find me on:</p>
          <div className="flex gap-4 py-4">
            <a href="https://www.instagram.com/yopernurr" target="_blank">
              <IcInstagram className="h-6 w-6" />
            </a>
            {/* <a href="https://www.instagram.com/yopernurr" target="_blank">
            <IcX className="w-6 h-6" />
          </a> */}
            <a href="https://www.github.com/stooezy" target="_blank">
              <IcGithub className="h-6 w-6" />
            </a>
            <a
              href="https://open.spotify.com/user/yogapermana30?si=070088b62c134299"
              target="_blank"
            >
              <IcSpotify className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
