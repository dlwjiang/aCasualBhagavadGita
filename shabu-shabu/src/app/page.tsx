import Image from "next/image";
import { Quicksand } from "next/font/google";

const font = Quicksand({ weight: "600", subsets: [] });
const accentColor = "#b70943";

export default function Home() {
  return (
    <main
      className={`${font.className} grid sm:grid-cols-1 md:grid-cols-2`}
      style={{ perspective: "10px" }}
    >
      <div className="col-span-1 h-screen flex flex-col justify-center items-center background-gradient">
        <div className="md:mt-10 text-white">
          <div
            className="text-3xl text-center tracking-wide"
            style={{
              textShadow: `2px 2px ${accentColor}`,
            }}
          >
            しゃぶしゃぶ
          </div>
          <div
            className="text-5xl text-center tracking-wide mb-1"
            style={{
              textShadow: `3px 3px ${accentColor}`,
            }}
          >
            Shabu Shabu
          </div>
          <div
            className=" text-2xl text-center tracking-wide"
            style={{
              textShadow: `2px 2px ${accentColor}`,
            }}
          >
            Full Pot Development
          </div>
          <Image
            src="/shabuPot.png"
            alt="Shabut Pot"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="col-span-1 h-screen bg-white flex flex-col justify-center items-center px-12">
        <div className={`flex flex-col items-center justify-center`}>
          <div className="p-4 bg-white">
            Shabu Shabu is a "Full Pot" development template that scaffolds an
            application using modern tools optimized for rapid prototyping, side
            projects, and MVP iteration. It uses{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="link-gradient"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://www.convex.dev/"
              target="_blank"
              className="link-gradient"
            >
              Convex
            </a>{" "}
            as the core technologies and also sets up boilerplate for useful
            tooling such as ESLint, Typescript,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="link-gradient"
            >
              Tailwind
            </a>
            , and{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              className="link-gradient"
            >
              Prettier.
            </a>
          </div>
          <div className="p-4 bg-white mb-8">
            It is inspired by{" "}
            <a
              href="https://prettier.io/"
              target="_blank"
              className="link-gradient"
            >
              shadcn's
            </a>{" "}
            philosophy of just giving you code rather than dependencies and
            documentation. It avoids the over-processing of too many moving
            pieces to emphasize a few high quality raw ingredients. Just fork
            the template and start developing.
          </div>
          <div className="text-white rounded shadow px-8 py-4 tracking-wide cursor-pointer button-gradient active:bg-red-700">
            <a href="https://github.com/Theory-A/ShabuShabu" target="_blank">
              Get the Template
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
