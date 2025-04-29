import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const dateNow = new Date();

  return (
    <div className="flex min-h-screen flex-col px-4 font-[Geist_Mono] md:px-36 xl:px-96">
      <header className="flex items-center justify-between py-4">
        <div>
          <svg
            width="480"
            height="480"
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-12"
          >
            <g clipPath="url(#clip0_3_2)">
              <path d="M480 480L480 240L464 256V480H480Z" fill="black" />
              <path d="M240 480L480 240L240 240L240 480Z" fill="black" />
              <path d="M0 480L240 240L1.52588e-05 240L0 480Z" fill="black" />
              <path d="M480 0L240 240H480L480 0Z" fill="black" />
              <path d="M240 0L0 240H240L240 0Z" fill="black" />
              <path d="M0 0V240L16 224V0H0Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_3_2">
                <rect width="480" height="480" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="grid h-8 w-8 cursor-pointer place-items-center"
          >
            {darkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
          <a
            href="/curriculo.pdf"
            className="flex h-8 items-center gap-1 rounded-full bg-black px-2 text-white hover:bg-neutral-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <p>currículo</p>
          </a>
        </div>
      </header>
      <main className="flex flex-col">
        <section className="debug flex flex-col md:items-center">
          <h1 className="w-full border-2 border-purple-500 text-5xl text-wrap md:text-center">
            matheus cavalcante
          </h1>
          <p>portfólio pessoal</p>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">sobre</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">educação</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">habilidades</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">experiência</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">projetos</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">conquistas</h2>
        </section>
        <section className="debug flex flex-col">
          <h2 className="text-xl">social</h2>
        </section>
      </main>
      <footer className="mt-auto grid h-16 place-items-center">
        <p className="text-xs">{`© ${dateNow.getFullYear()} · Matheus Cavalcante`}</p>
      </footer>
    </div>
  );
}
