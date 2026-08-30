import {
  AcademicCapIcon,
  ChipIcon,
  MicrophoneIcon,
  DownloadIcon,
  MusicNoteIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/fungus_background.jpg';
import ballotImage from '../images/portfolio/voting.png';
import sketchImage from '../images/portfolio/sketch.png';
import gestureImage from '../images/portfolio/gesture_rock.png';
import monkeyImage from '../images/portfolio/monkey.jpg';
import quoridorImage from '../images/portfolio/quoridor.jpg';
import brainDisplayImage from '../images/portfolio/brain_display.jpg'
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import porfolioImage from '../../public/homepage.png'
import webcamDemo from '../images/portfolio/gesture_demo.gif'
import sketchDemo from '../images/portfolio/sketch_demo.gif'
import unitTestingImage from '../images/goodReads/unit_testing.png'
import gptJokeImage from '../images/goodReads/gpt.png'
import dalleExampleImage from '../images/goodReads/dalle_example.webp'
import cleanCodeImage from '../images/goodReads/clean_code.jpg'
import pragmaticProgrammerImage from '../images/goodReads/pragmatic-programmer.jpg'
import maze2Image from '../images/portfolio/maze2.png'
import catanatronImage from '../images/portfolio/catanatron.png'
import arxivImage from '../images/goodReads/arxiv.png'
import pythonBookImage from '../images/goodReads/pythonBook.jpg'

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioDemo,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from 'react';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'mason.zarns',
  description: "Personal Portfolio of Mason Zarns",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Readings: 'readings',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mason.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Minneapolis based <strong className="text-stone-100">Software Engineer</strong>. 
        I'm passionate about building things that work.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not gaslighting
        <strong className="text-stone-100">
          <a href="https://claude.ai/"> Claude</a>
        </strong>,
        you might find me staring at my Venus Flytrap,
        {/* <strong className="text-stone-100">
          <a href="https://www.joshuaweissman.com/post/sourdough-bread"> Sourdough Starter</a>
        </strong>, */}
        <br></br>
        hoping it survives the winter.
        I'm excited to share my portfolio with you!
      </p>
    </>
  ),
  actions: [
    {
      href: '/zarnsresume.pdf',
      text: 'Resume for Humans',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: '/zarnsresume-ats.pdf',
      text: 'Resume for AI',
      primary: true,
      Icon: ChipIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
  `Software Engineer III at Pearson. I ship in the legacy systems nobody else
  wants to touch, and I spend the rest of my time helping the engineers around me
  move faster with AI. I love asking questions that make engineers' eyes light up.`,
  aboutItems: [
    {label: 'Study', text: 'University of Minnesota-Twin Cities', Icon: AcademicCapIcon},
    {label: 'Location', text: 'Minneapolis, MN', Icon: MapIcon},
    {label: 'Interests', text: 'Cooking, Coffee, Puppy Dogs', Icon: SparklesIcon},
    {label: 'Employment', text: 'Pearson', Icon: OfficeBuildingIcon},
    {label: 'Music', text: 'Simon & Garfunkel Enthusiast', Icon: MusicNoteIcon},
    {label: 'Fav Podcast', text: 'Lex Fridman', Icon: MicrophoneIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {name: 'Java', level: 8},
      {name: 'Python', level: 8},
      {name: 'SQL', level: 7},
      {name: 'TypeScript', level: 6},
      {name: 'Kotlin', level: 6},
      {name: 'Rust', level: 5},
    ],
  },
  {
    name: 'Platform',
    skills: [
      {name: 'Azure', level: 8},
      {name: 'Spring Boot', level: 7},
      {name: 'Angular', level: 6},
      {name: 'Terraform', level: 5},
      {name: 'Docker', level: 5},
      {name: 'Slack Emojis', level: 6},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioDemosPart1: PortfolioDemo[] = [
  {
    title: 'Webcam Mouse Demo',
    description: 'Mouse movement, clicking, scrolling, volume and brightness control',
    url: 'https://github.com/zarns/gesture-recognition',
    image: webcamDemo
  },
];

export const portfolioDemosPart2: PortfolioDemo[] = [
  {
    title: 'Guess-A-Sketch Demo',
    description: 'A game of Telephone, but with drawings. Try with friends!',
    url: 'https://github.com/zarns/guess-a-sketch',
    image: sketchDemo
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Catanatron',
    description: 'Collaborating to create the world\'s first Superhuman Catan player.',
    url: 'https://www.catanatron.com/',
    image: catanatronImage,
  },
  {
    title: 'D* lite Algorithm',
    description: 'Experiment with the maze to understand the dynamic pathfinding algorithm.',
    url: 'https://www.zarns.net/pathfinder',
    image: maze2Image,
  },
  {
    title: 'Webcam Mouse',
    description: 'For when your mouse runs out of battery. Demo above.',
    url: 'https://github.com/zarns/gesture-recognition',
    image: gestureImage,
  },
  {
    title: 'Portfolio Website',
    description: 'Check out the source code for this very website!',
    url: 'https://github.com/zarns/portfolio',
    image: porfolioImage,
  },
  {
    title: 'Guess-A-Sketch',
    description: 'A game of Telephone, but with drawings. Try with friends!',
    url: 'https://github.com/zarns/guess-a-sketch',
    image: sketchImage,
  },
  {
    title: 'Voting Machine',
    description: 'Visualize the Instant Runoff Voting (IRV) algorithm.',
    url: 'https://github.com/zarns/voting-machine',
    image: ballotImage,
  },
  {
    title: 'Quoridor AI',
    description: 'See if you can beat the Monte Carlo Tree Search algorithm. Good luck.',
    url: 'https://github.com/zarns/QuoridorAI',
    image: quoridorImage,
  },
  {
    title: 'ASCII Art',
    description: 'No need to understand grapheme clusters.',
    url: 'https://github.com/zarns/ascii-artist',
    image: brainDisplayImage,
  },
  {
    title: 'Primate Pose Estimation',
    description: 'Experiment with different neural net architectures for pose recognition.',
    url: 'https://github.com/zarns/openMonkeyChallenge',
    image: monkeyImage,
  },
];

export const goodReadsItems: PortfolioItem[] = [
  {
    title: 'The Art of Unit Testing',
    description: 'The sacred text',
    url: 'https://www.artofunittesting.com/tdd-in-kotlin',
    image: unitTestingImage,
  },
  {
    title: 'Forecasting Language Model Misuse',
    description: 'Strategies to usher in GPT as a force for good',
    url: 'https://openai.com/research/forecasting-misuse',
    image: dalleExampleImage,
  },
  {
    title: 'The Waluigi Effect',
    description: 'GPT Prompt Engineering Concepts',
    url: 'https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post',
    image: gptJokeImage,
  },
  {
    title: 'Clean Code',
    description: 'Keep it simple, stupid.',
    url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?hvadid=598689398819&hvdev=c&hvlocphy=9019605&hvnetw=g&hvqmt=e&hvrand=5298928711652158957&hvtargid=kwd-76050495602&hydadcr=16409_13457184&keywords=clean+code+by+robert+c+martin&qid=1690754778&sr=8-1', 
    image: cleanCodeImage,
  },
  {
    title: 'Pragmatic Programmer',
    description: 'How many programmers does it take to change a lightbulb? None, that\'s a hardware problem.',
    url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/', 
    image: pragmaticProgrammerImage,
  },
  {
    title: 'Proximal Policy Optimization Algorithms',
    description: 'Catan inspiration',
    url: 'https://arxiv.org/pdf/1707.06347', 
    image: arxivImage,
  },
  {
    title: 'Python 3: The Hard Way',
    description: 'The easy way',
    url: 'https://books.google.com/books/about/Learn_Python_3_the_Hard_Way.html?id=93YpDwAAQBAJ', 
    image: pythonBookImage,
  },
  {
    title: '5 Ways NOT to Build a Catan AI',
    description: 'Still figuring out the right way.',
    url: 'https://medium.com/@bcollazo2010/5-ways-not-to-build-a-catan-ai-e01bc491af17#:~:text=1.%20Random.%20The%20most%20basic%20benchmark%20is%20the%20bot%20that', 
    image: catanatronImage,
  },
]

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'University of Minnesota',
    title: 'B.S. Computer Science',
    content: 
    <>
      <p style={{marginBottom: '.4em'}}>
        <strong>Favorite Classes:</strong> Software Design, Computer Vision, Machine Learning, Artificial Intelligence
      </p>
      <p>
        I have a minor in chemistry thanks to{" "}
        <strong>
            <a href="http://www.savewalterwhite.com/" style={{textDecoration: 'underline'}}>Breaking Bad</a>
        </strong>. Ask me for a chemistry joke!
      </p>
    </>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2026 - Present',
    location: 'Pearson',
    title: 'Software Engineer III',
    content: (
      <>
        <p style={{marginBottom: '.5em'}}>
          Lead AI adoption across a 100-engineer organization: an 8-video internal series on
          real-world agentic workflows, now driving adoption by 20+ engineers including four
          dev leads and two architects.
        </p>
        <p>
          Rebuilt the dependency-update workflow around AI tooling, cutting engineering spend
          from 43 to 5 hours per week and shipping security fixes twice as fast.
        </p>
      </>
    ),
  },
  {
    date: 'Sep 2024 - Jan 2026',
    location: 'Pearson',
    title: 'Software Engineer',
    content: (
      <>
        <p style={{marginBottom: '.5em'}}>
          Delivered a zero-downtime modernization of a business-critical portal, splitting a
          monolithic Tomcat application into a CDN-delivered frontend and Kubernetes services:
          40 integrated applications across a dozen teams, $96K/year in cloud savings.
        </p>
        <p>
          Redesigned defect triage across the dev team for 25% faster resolution and 45% fewer
          customer escalations.
        </p>
      </>
    ),
  },
  {
    date: 'Apr 2023 - Sep 2024',
    location: 'Pearson',
    title: 'Associate Software Engineer',
    content: (
      <>
      <p>
        Spearheaded Pearson's enterprise Azure migration from IaC design through production
        cutover, cutting infrastructure costs 20% while holding 99.7% availability across
        10,000+ global test centers. Automated FedRAMP vulnerability remediation for 65%
        faster time-to-resolution, unlocking $7M in federal contracts.
      </p>
      </>
    ),
  },
  {
    date: 'May - Dec 2022',
    location: 'Code42',
    title: 'Cloud SWE Intern',
    content: (
      <p>
        Designed and implemented feature allowing customers 
        to configure their own data storage policies to improve price negotiablility.
        Used Kotlin, Spring Boot, Terraform, Docker, and various AWS Services
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Discrete Math Professor',
      text: 'Mason was a natural, I didn\'t even know he was in this class!',
      image: 'linus_portrait.jpg',
    },
    {
      name: 'Mike Zarns',
      text: 'Never let the magic smoke out of the PC. Once it escapes, it\'s really hard to put it back.',
      image: 'mike_portrait.jfif',
    },
    {
      name: 'Anonymous',
      text: 'One time I saw him spend two hours googling which brand of canned air was best to clean a pc with. He\'s nuts.',
      image: 'satya_portrait.jpg',
    },
    {
      name: 'Elon Tusk',
      text: 'He keeps muttering "There\s no place like 127.0.0.1" over and over again. I\'m worried about him.',
      image: 'elon_portrait.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'mason@zarns.net',
    },
    {
      type: ContactType.Github,
      text: 'github.com/zarns',
      href: 'https://github.com/zarns',
    },
    {
      type: ContactType.LinkedIn,
      text: 'mason-zarns',
      href: 'https://www.linkedin.com/in/mason-zarns/',
    },
    {
      type: ContactType.Location,
      text: 'Minneapolis, MN',
      href: 'https://goo.gl/maps/p8ikua9yiFNbr2nt6',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/zarns'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mason-zarns/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/19917202/mason-zarns'},
];
