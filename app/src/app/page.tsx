import Image from "next/image";
import { Fredoka, Kalam } from "next/font/google";
import content from "./content";
import ChapterSelect from "./ChapterSelect";
import type { Metadata } from "next";

const font = Fredoka({ weight: "400", subsets: [] });
const hindiFont = Kalam({ weight: "400", subsets: [] });

export default function Home() {
  return (
    <main
      className={`${font.className} h-screen overflow-y-scroll overflow-x-hidden bg-amber-900/10`}
      style={{ perspective: "10px" }}
    >
      <div className="absolute right-0 top-0 pr-4 pt-1 flex items-center">
        <a
          href="https://www.youtube.com/@ACasualDaoDeJing"
          target="_blank"
          className="text-[#c5a20a] hover:underline mr-2"
        >
          <Image src="/youtube.png" width={20} height={20} alt="youtube icon" />
        </a>
        <a
          href="https://dj.theory-a.com/"
          target="_blank"
          className="text-[#c5a20a] hover:underline"
        >
          About
        </a>
      </div>
      <header
        className="relative flex flex-col items-center justify-center h-full"
        style={{ transformStyle: "preserve-3d", zIndex: -1 }}
      >
        <Image
          src="/background.png"
          alt="Fun Background"
          className="h-full w-full absolute object-cover opacity-70"
          style={{ transform: "translateZ(-1.5px) scale(1.15)" }}
          width={1200}
          height={400}
          priority
        />
        <Image
          src="/foreground.png"
          alt="Mountainous Foreground"
          className="h-full w-full absolute object-cover"
          width={1200}
          height={400}
          priority
        />
        <div
          className="text-white text-6xl z-10 text-center mx-16 p-4 bg-stone-200/50 rounded"
          style={{
            textShadow: "4px 4px 2px #4b0b0d",
            transform: "translateZ(1px) scale(0.9)",
          }}
        >
          A Casual Bhagavad Gita
        </div>
      </header>
      <section className="flex flex-col items-center">
        <div className="self-baseline sticky ml-4 mt-4 top-4">
          <ChapterSelect content={content} />
        </div>
        {content.map((e, i) => (
          <div
            id={e.title}
            key={e.title}
            className="bg-white p-4 m-1 w-11/12 md:w-auto md:p-8 md:m-8 rounded-xl shadow whitespace-pre bg-white/70"
          >
            <div className="text-amber-800 text-2xl">
              <a href={`/#${e.title}`}>
                {i + 1} - {e.title}
              </a>
            </div>
            <div
              className={`${hindiFont.className} text-sm md:text-base text-amber-900/50 tracking-wide -ml-5 overflow-x-auto overflow-y-hidden`}
            >
              {e.original}
            </div>
            <div className="leading-7 text-sm md:text-base tracking-wider text-amber-900 -ml-5 overflow-x-auto">
              {e.english}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "A Casual Bhagavad Gita",
  referrer: "origin-when-cross-origin",
  keywords: ["A Casual Bhagavad Gita", "Bhagavad Gita"],
  creator: "David Jiang",
  // metadataBase: new URL("https://a-casual-dao.theory-a.com"),
};
