import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PortfolioItem from "../components/PortfolioItem"
import IconButton from "../components/IconButton"

const portfolioItems = [
  { title: "Art & Designs", timestamp: "", thumbnail: "https://i.imgur.com/8jJNtFP.png", url: "/gallery" },
  { title: "SethDev.ca", timestamp: "2021-03-07", thumbnail: "https://i.imgur.com/viXYygQ.png", url: "https://github.com/SethCohen/sethdev.ca" },
  { title: "EmojiUtilities", timestamp: "2020-09-20", thumbnail: "https://i.imgur.com/vGKBtjD.png", url: "https://github.com/SethCohen/EmojiUtilities" },
  { title: "ESMA", timestamp: "2019-05-28", thumbnail: "https://i.imgur.com/9TlDFCp.png", url: "https://github.com/SethCohen/KF2-Easy-Server-Map-Adder" },
  { title: "Vision Log", timestamp: "2018-08-30", thumbnail: "https://i.imgur.com/AZVmOjK.png", url: "https://play.google.com/store/apps/details?id=seth.cohen.visionlog" },
  { title: "ASLearner", timestamp: "2022-09-29", thumbnail: "https://i.imgur.com/GxMBBKk.png", url: "https://github.com/SethCohen/ASLearner" },
  { title: "Github Releases To Discord", timestamp: "2022-08-23", thumbnail: "https://i.imgur.com/DjP1uuZ.png", url: "https://github.com/marketplace/actions/github-releases-to-discord" },
]

const iconButtonsSocials = [
  { title: 'Github', href: 'https://github.com/SethCohen', imgSrc: 'https://cdn.simpleicons.org/github/white' },
  { title: 'Playstore', href: 'https://play.google.com/store/apps/developer?id=SethCohen', imgSrc: 'https://cdn.simpleicons.org/googleplay/white' },
  { title: 'Youtube', href: 'https://www.youtube.com/channel/UCt3r8b3iDiUiQo9SdBRBgNw', imgSrc: 'https://cdn.simpleicons.org/youtube/white' },
  { title: 'Mail', href: 'mailto:sethcohen.dev@gmail.com', imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/simpleicons.svg' },
]

const iconButtonsSupport = [
  { title: 'Github Sponsor', href: "https://github.com/sponsors/SethCohen", imgSrc: 'https://cdn.simpleicons.org/githubsponsors/white' },
  { title: 'Buy Me A Coffee', href: "https://www.buymeacoffee.com/SethCohen", imgSrc: 'https://cdn.simpleicons.org/buymeacoffee/white' },
  { title: 'Paypal', href: "https://paypal.me/SethCohenDev", imgSrc: 'https://cdn.simpleicons.org/paypal/white' },
  { title: 'Ko-Fi', href: "https://ko-fi.com/sethcohen", imgSrc: 'https://cdn.simpleicons.org/kofi/white' },
  { title: 'Patreon', href: "https://www.patreon.com/sethcohen", imgSrc: 'https://cdn.simpleicons.org/patreon/white' },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen antialiased">
      <div className="fixed top-4 right-4 z-50 animate-fade-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-16 w-16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <section>
            <div className="h-screen">
              <div className="flex items-center justify-start h-full">
                <div>
                  <h1 className="text-6xl font-bold">&lt; Seth Cohen /&gt;</h1>
                  <p className="text-2xl font-semibold">Hobbyist | Minimalist | Developer | Designer</p>
                  <div className="flex space-x-4 mt-4">
                    {iconButtonsSocials.map((button, index) => (
                      <IconButton key={index} title={button.title} href={button.href} imgSrc={button.imgSrc} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-screen">
              <h2 id="about" className="sr-only">About</h2>
              <div className="flex flex-col justify-center items-center h-full text-2xl text-start font-semibold">
                <p className="">
                  Hi, I'm Seth.
                  <br/>
                  <br/>
                  {/* </p> */}
                {/* <p className=""> */}
                  I'm a freelancer, hobbyist, software developer, and designer with a passion for crafting innovative applications, software solutions, digital art, and graphic designs. My curiosity and eagerness to learn drives me to continuously acquire new skills, explore new technologies, or experiment with creative concepts, in order to bring even my most whimsical ideas and goals to life.
                  <br/>
                  <br/>
                  {/* </p > */}
                {/* <p className=""> */}
                  I'm currently a Masters student in Computer Science researching into Human-Computer Interaction in relation to American Sign Language education in hopes to overcome the unique challenges of non-verbal language learning through innovative app development. My work aims not only to address the intricacies of teaching ASL through digital means but also to tackle common issues in language learning, such as user retention and effective engagement.
                  <br/>
                  <br/>
                  {/* </p> */}
                {/* <p className=""> */}
                  If you're feeling generous and you've used any of my projects and like them, you can support me by donating below. Thank you!
                </p>
                <div className="flex space-x-4 mt-4">
                  {iconButtonsSupport.map((button, index) => (
                    <IconButton key={index} title={button.title} href={button.href} imgSrc={button.imgSrc} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-screen">
              <div className="flex items-center justify-center h-full">
                <h2 id="portfolio" className="sr-only">Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {portfolioItems.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map((item, index) => (
                    <PortfolioItem key={index} title={item.title} timestamp={item.timestamp} thumbnail={item.thumbnail} url={item.url} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>SethDev</title>