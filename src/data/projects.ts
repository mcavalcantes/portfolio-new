export const PROJECTS: {
  link: string;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    link: "https://github.com/mcavalcantes/derivaquiz",
    title: "derivaquiz (inativo)",
    description:
      "versão remasterizada do derivadash, é um projeto desenvolvido com o propósito de otimizar o aprendizado de estudantes de engenharia na disciplina de cálculo, sendo inicialmente criado para ajudar os alunos que frequentavam minha monitoria. serve como uma ferramenta de estudos em um formato de quiz, constituindo um método ágil e eficiente para o aprendizado.",
    items: [
      "desenvolvi uma interface totalmente responsiva e performática, com arquitetura limpa (reducer e context).",
      "implementei a api da aplicação com sqlite e express, integrando-o com o front-end em react e tailwind.",
      "estou criando mais de 120 questões com latex para serem usadas, com três categorias e quatro níves de dificuldade diferentes.",
    ],
  },
  {
    link: "https://github.com/mcavalcantes/bitsmanip",
    title: "bitsmanip",
    description:
      "biblioteca feita em c++ para manipulação de bits de números inteiros de 32 bits. feito com o objetivo de entender melhor como as operações em números binários funcionam, em uma perspectiva de baixo nível.",
    items: [
      "feita por mim do zero e implementada de forma rápida e eficiente, garantindo agilidade no processamento das instruções.",
      "conta com 27 funções utilitárias, suportando diversas operações feitas através de suboperações bit a bit.",
      "totalmente testada por uma extensa bateria de testes, assegurando a precisão das operações.",
    ],
  },
  {
    link: "https://blog-mcavalcante.vercel.app/",
    title: "blog",
    description:
      "desenvolvi um blog pessoal como desafio para me aprofundar no framework next.js e em outras áreas do desenvolvimento web que desconhecia, e também para ter um lugar para escrever minhas ideias e pensamentos.",
    items: [
      "criei o mapeamento objeto-relacional das entidades usando prisma e usei postgresql como banco de dados para armazenar dados de posts e comentários.",
      "adicionei suporte ao formato mdx para a escrita e visualização dos posts, permitindo uma apresentação mais organizada e agradável do conteúdo.",
      "implementei a funcionalidade de postagem de comentários, sem necessidade de autenticação prévia para poder deixar comentários em cada post.",
    ],
  },
  {
    link: "https://mcavalcantes.netlify.app/",
    title: "portfólio",
    description:
      "website pessoal que visa mostrar, de forma completa, minhas habilidades, experiências, projetos, e conquistas.",
    items: [
      "desenvolvi uma interface de usuário totalmente responsiva e fluida utilizando react e tailwind css.",
      "implementei um código modularizado, garantindo rapidez e eficiência em possíveis alterações no futuro.",
      "apliquei conceitos de design atômico, individualizando processos e promovendo a integridade do código.",
    ],
  },
  {
    link: "https://mcavalcantes.github.io/derivadash/",
    title: "derivadash",
    description:
      "projeto desenvolvido para otimizar o aprendizado dos alunos que frequentavam minha monitoria. serve como uma ferramenta que visa reforçar o estudo das regras de derivação vistas em cálculo, em um formato de quiz.",
    items: [
      "desenvolvi o projeto do absoluto zero, utilizando simplesmente html, css, e javascript puro.",
      "implementei toda a lógica do funcionamento da página usando métodos nativos do javascript.",
      "criei mais de 70 questões usando latex para serem usadas como exercícios na página.",
    ],
  },
];
