import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative flex flex-row justify-between mx-[2dvw] my-[5dvh] border-[1px] h-[90dvh] w-[94dvw]">
        <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted playbackRate={0.5}>
          <source src="background.mp4" type="video/mp4" />
        </video>
        <section className="flex flex-col z-10">
          <div className="p-5 w-[34dvw] ">
            <h2 className="text-3xl font-NeueMontreal">
              Karl Soutien
            </h2>
            <p className="text-xs">
              ESGI Student
            </p>
          </div>
          <nav className="px-5">
            <ul className="text-xs">
              <li className="py-1">
                <a className="hover:opacity-[0.5]" href="#">
                  home
                </a>
              </li>
              <li className="py-1" >
                <a className="hover:opacity-[0.5]" href="#">
                  info
                </a>
              </li>
              <li className="py-1">
                <a className="hover:opacity-[0.5]" href="#">
                  cours
                </a>
              </li>
              <li className="py-1">
                <a className="hover:opacity-[0.5]" href="#">
                  exercices
                </a>
              </li>
              <li className="py-1">
                <a className="hover:opacity-[0.5]" href="#">
                  contacts
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex flex-col p-5 text-right z-10">
          <h1 className="font-bold text-xl py-1">
            welcome to karl soutien
          </h1>
          <p className="text-sm py-1">
            le but de ce site est de vous aider à comprendre vos cours et à vous exercer
          </p>
          <p className="text-sm py-1">
            le site est gratuit et ouvert à tous pour le moment
          </p>
        </section>
      </div>
    </main>
  );
}
