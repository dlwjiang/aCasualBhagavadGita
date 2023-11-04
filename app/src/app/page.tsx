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
          className="text-white text-6xl z-10 text-center px-16"
          style={{
            textShadow: "2px 2px 2px #027780",
            transform: "translateZ(2px) scale(0.8)",
          }}
        >
          A Casual Dao De Jing
        </div>
      </header>
      <section className="md:px-48">
        {content.map((e, i) => (
          <div
            key={e.title}
            className="bg-white p-2 m-2 md:p-8 md:m-8 rounded-xl shadow whitespace-pre-wrap bg-white/70"
          >
            <div className="text-yellow-600 text-2xl">{e.title}</div>
            <div
              className={`${chineseFont.className} text-sm md:text-base text-stone-600/50 tracking-wide`}
            >
              {e.original}
            </div>
            <div className="leading-7 text-sm md:text-base tracking-wide text-stone-700">
              {e.english}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
