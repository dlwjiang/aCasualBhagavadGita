import Image from "next/image";
import { Fredoka, Ma_Shan_Zheng, ZCOOL_KuaiLe } from "next/font/google";
import content from "./content";

const font = Fredoka({ weight: "400", subsets: [] });
const chineseFont = ZCOOL_KuaiLe({ weight: "400", subsets: [] });

export default function Home() {
  return (
    <main
      className={`${font.className} h-screen overflow-y-scroll overflow-x-hidden bg-amber-50`}
      style={{ perspective: "10px" }}
    >
      <a
        href="https://dj.theory-a.com/"
        target="_blank"
        className="absolute right-0 top-0 pr-4 pt-1 text-[#c5a20a] hover:underline"
      >
        About
      </a>
      <header
        className="relative flex flex-col items-center justify-center h-full"
        style={{ transformStyle: "preserve-3d", zIndex: -1 }}
      >
        <Image
          src="/sun.png"
          alt="Sun"
          className="h-full w-full absolute object-cover"
          style={{ transform: "translateZ(-10px) scale(2)" }}
          width={1200}
          height={400}
          priority
        />
        <Image
          src="/background.png"
          alt="Fun Background"
          className="h-full w-full absolute object-cover opacity-80"
          style={{ transform: "translateZ(-5px) scale(1.5)" }}
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
            textShadow: "4px 4px 2px #027780",
            transform: "translateZ(2px) scale(0.8)",
          }}
        >
          A Casual Dao De Jing
        </div>
      </header>
      <section className="md:px-48 flex flex-col items-center">
        {content.map((e, i) => (
          <div
            id={e.title}
            key={e.title}
            className="bg-white p-2 m-2 md:p-8 md:m-8 rounded-xl shadow whitespace-pre-wrap bg-white/70 max-w-[500px]"
          >
            <div className="text-yellow-600 text-2xl">
              <a href={`/#${e.title}`}>{e.title}</a>
            </div>
            <div
              className={`${chineseFont.className} text-sm md:text-base text-stone-600/50 tracking-wide -ml-5`}
            >
              {e.original}
            </div>
            <div className="leading-7 text-sm md:text-base tracking-wider text-stone-700 -ml-5">
              {e.english}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
