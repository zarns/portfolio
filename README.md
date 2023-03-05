
<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/zarns/portfolio">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React Porfolio</h3>

  <p align="center">
    <a href="https://mason.zarns.net">mason.zarns.net</a>
  </p>
</div>

[![screenshot][portfolio-screenshot]][portfolio-url]

<details>
  <summary>Table of Contents :bowtie:</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br/>

## About

Currently working on integrating a chess game into the site.

### Built With

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![NodeJS][NodeJS]][Node-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![TailwindCSS][Tailwind]][Tailwind-url]
[![Sass][Sass]][Sass-url]
[![Yarn][Yarn]][Yarn-url]
[![NPM][NPM]][NPM-url]

## Getting Started

To get your own portfolio up and running follow these steps.

### Prerequisites

1. Install NodeJS

   [https://nodejs.org](https://nodejs.org/en/#home-downloadhead)

2. Install NPM & Yarn

   ```sh
   npm install npm@latest -g
   ```

   ```sh
   npm install --global yarn
   ```

3. Install gh-pages

   ```sh
   npm install gh-pages --save-dev
   ```

4. Probably some other things I forgot along the way

   :wink:

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/zarns/portfolio.git
   ```

2. Run locally on `port 3000`

   ```sh
   yarn dev
   ```

    * Open [http://localhost:3000/](http://localhost:3000/) in browser
    * Edit a file and save. Watch changes deploy locally in seconds. Start with `src/data/data.tsx`

3. Build and deploy to `Github Pages`

   ```sh
   yarn run deploy
   ```

   * Note: This will run a script from `/package.json` to push a compiled react app to the gh-pages branch in your git repo. Check in your github pages settings that the app is being deployed from the gh-pages branch and root directory.
   * Github Pages provides a domain. If you want to use a custom domain: [using-custom-domains-for-react-apps-deployed-to-github-pages](https://www.pluralsight.com/guides/using-custom-domains-for-react-apps-deployed-to-github-pages)

## Acknowledgments

I went into this project with limited frontend experience and followed a number of tutorials before feeling comfortable enough to pull ideas from different places. Major thanks to these resources:

* [braydoncoyer-porfolio](https://github.com/braydoncoyer/braydoncoyer.dev)
* [soumyajit-porfolio](https://github.com/soumyajit4419/Portfolio)
* [ariful-gitprofile](https://github.com/arifszn/gitprofile)
* [portfolio-v2](https://github.com/CodeVinayak/Portfolio-v2)
* [react-resume](https://github.com/tbakerx/react-resume-template)
* [leerob.io](https://github.com/leerob/leerob.io)
* [readme-template](https://github.com/othneildrew/Best-README-Template)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Image Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
* [Hero Icons](https://heroicons.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mason-zarns
[portfolio-screenshot]: public/homepage.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[portfolio-url]: https://mason.zarns.net
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[Tailwind-url]: https://tailwindcss.com/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Sass]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[Sass-url]: https://sass-lang.com/
[Yarn]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[Yarn-url]: https://www.npmjs.com/package/yarn
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
