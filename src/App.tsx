import { useEffect } from "react";
import { useState } from "react";

import { SKILLS } from "./data/skills";
import { EXPERIENCES } from "./data/experiences";
import { PROJECTS } from "./data/projects";
import { ACHIEVEMENTS } from "./data/achievements";
import { SOCIALS } from "./data/socials";

export default function App() {
  useEffect(() => {
    let userPageTheme = localStorage.getItem("pageTheme");

    if (!userPageTheme) {
      userPageTheme = "light";
      localStorage.setItem("pageTheme", userPageTheme);
    }

    document.documentElement.classList.add(userPageTheme);
    setPageTheme(userPageTheme);
  }, []);

  function handleClick(pageTheme: string | null) {
    if (!pageTheme) throw new Error("`pageTheme` value is null");

    const newTheme = pageTheme === "light" ? "dark" : "light";

    document.documentElement.classList.remove(pageTheme);
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("pageTheme", newTheme);
    setPageTheme(newTheme);
  }

  const [pageTheme, setPageTheme] = useState<string | null>(null);
  const dateNow = new Date();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] px-4 font-[Geist_Mono] text-[var(--text)] md:px-36 xl:px-96">
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
              <path d="M480 480L480 240L464 256V480H480Z" fill="currentColor" />
              <path d="M240 480L480 240L240 240L240 480Z" fill="currentColor" />
              <path
                d="M0 480L240 240L1.52588e-05 240L0 480Z"
                fill="currentColor"
              />
              <path d="M480 0L240 240H480L480 0Z" fill="currentColor" />
              <path d="M240 0L0 240H240L240 0Z" fill="currentColor" />
              <path d="M0 0V240L16 224V0H0Z" fill="currentColor" />
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
            onClick={() => handleClick(pageTheme)}
            className="grid h-8 w-8 cursor-pointer place-items-center hover:bg-[#e6e6e6] dark:hover:bg-[#333333]"
          >
            {pageTheme === "light" ? (
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
            className="flex h-8 items-center gap-1 rounded-full bg-[var(--text)] px-2 text-[var(--background)] hover:bg-[#333333] dark:hover:bg-[#e6e6e6]"
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

      <main className="flex flex-col gap-8">
        <section>
          <h1 className="w-full py-8 text-5xl text-wrap md:text-center">
            matheus cavalcante
          </h1>
          <p>portfólio pessoal</p>
        </section>

        <section>
          <h2 className="py-2 text-2xl font-semibold">sobre</h2>
          <p className="text-sm">
            estudante do 5º período de engenharia de computação munido de alta
            capacidade analítica, extrema versatilidade para resolver problemas
            complexos, forte aptidão com exatas, e paixão por ensinar e ajudar
            quem conhece. um líder natural, sou uma pessoa que busca
            incansavelmente o aprimoramento de si e dos outros.
          </p>
        </section>

        <section>
          <h2 className="py-2 text-2xl font-semibold">habilidades</h2>
          <ul className="flex flex-col gap-4">
            {SKILLS.map((skill, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium">{skill.group}</h3>
                  </div>
                  <ul className="flex flex-row flex-wrap gap-2 text-sm">
                    {skill.items.map((item, index) => (
                      <li key={index}>
                        <div className="grid h-6 place-items-center rounded-full border border-[var(--text)] px-2 select-none hover:bg-[var(--text)] hover:text-[var(--background)]">
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col">
          <h2 className="py-2 text-2xl font-semibold">experiência</h2>
          <ul className="flex flex-col gap-4">
            {EXPERIENCES.map((experience, index) => (
              <li key={index}>
                <div className="flex flex-col border border-[var(--text)] p-4">
                  <div className="pb-2">
                    <h3 className="font-medium">{experience.title}</h3>
                    <h4 className="text-sm">{experience.subtitle}</h4>
                  </div>
                  <ul className="flex list-inside list-disc flex-col gap-1 text-sm">
                    {experience.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="py-2 text-2xl font-semibold">projetos</h2>
          <ul className="flex flex-col gap-4">
            {PROJECTS.map((project, index) => (
              <li key={index}>
                <div className="flex flex-col border border-[var(--text)] p-4">
                  <div className="pb-2">
                    <h3>
                      <a href={project.link} className="font-medium underline">
                        {project.title}
                      </a>
                    </h3>
                  </div>
                  <p className="pb-2 text-sm">{project.description}</p>
                  <ul className="flex list-inside list-disc flex-col gap-1 text-sm">
                    {project.items &&
                      project.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="py-2 text-2xl font-semibold">conquistas</h2>
          <ul className="flex flex-col gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <li key={index}>
                <div className="flex flex-col border border-[var(--text)] p-4">
                  <div className="pb-2">
                    <h3 className="font-medium">{achievement.title}</h3>
                    <h4 className="text-sm">{achievement.subtitle}</h4>
                  </div>
                  <p className="text-sm">{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="py-2 text-2xl font-semibold">social</h2>
          <ul>
            {SOCIALS.map((social, index) => (
              <li key={index}>
                <a href={social.link} className="underline">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-auto grid h-20 place-items-center">
        <p className="text-xs">{`© ${dateNow.getFullYear()} · Matheus Cavalcante`}</p>
      </footer>
    </div>
  );
}
