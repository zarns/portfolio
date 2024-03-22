import {
  AcademicCapIcon,
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
          <a href="https://openai.com/"> ChatGPT</a>
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
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  `I studied Computer Science at UMN with a focus on AI and Machine Learning.
  I love asking questions that make engineers' eyes light up.`,
  aboutItems: [
    {label: 'Study', text: 'University of Minnesota-Twin Cities', Icon: AcademicCapIcon},
    {label: 'Location', text: 'Minneapolis, MN', Icon: MapIcon},
    {label: 'Interests', text: 'Cooking, Coffee, Puppy Dogs', Icon: SparklesIcon},
    {label: 'Employment', text: 'Pearson VUE', Icon: OfficeBuildingIcon},
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
      {
        name: 'Kotlin',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'TypeScript',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4.5,
      },
    ]
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'Spring Boot',
        level: 6,
      },
      {
        name: 'React',
        level: 4.5,
      },
      {
        name: 'Docker',
        level: 4.5,
      },
      {
        name: 'Terraform',
        level: 4,
      },
      {
        name: 'Slack Emojis',
        level: 5,
      }
    ],
  }
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
    title: 'D* lite Algorithm',
    description: 'Experiment with the maze to understand the dynamic pathfinding algorithm.',
    url: 'https://github.com/zarns/openMonkeyChallenge',
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
    description: '',
    url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/', 
    image: pragmaticProgrammerImage,
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
    date: 'Mar 2023 - Present',
    location: 'Pearson VUE',
    title: 'Associate Software Developer',
    content: (
      <>
        <p style={{marginBottom: '.5em'}}>
          Maintain and develop backend solutions for results processing of virtual exams,
          tailoring solutions to client needs. Actively involved in VUE's migration to Azure.
        </p>
        <p>
          VUE has partnered with Microsoft to host Azure certification exams. 
        </p>
        <p>
          Try out the {" "}
          <a href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Azure Fundamentals Exam</a>.
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
