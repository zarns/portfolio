import {
  AcademicCapIcon,
  CalendarIcon,
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
import chessImage from '../images/portfolio/chess.jpg';
import gestureImage from '../images/portfolio/gesture_rock.png';
import monkeyImage from '../images/portfolio/monkey.jpg';
import quoridorImage from '../images/portfolio/quoridor.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import porfolioImage from '../../public/homepage.png'

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

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
          <a href="https://www.bing.com/new"> Bing Chat</a>
        </strong>, 
        you might find me staring at my 
        <strong className="text-stone-100">
          <a href="https://www.joshuaweissman.com/post/sourdough-bread"> Sourdough Starter</a>
        </strong>,
        hoping it works better this time.
        I'm excited to share my portfolio with you and look forward to hearing from you!
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
  Last year, I interned at Code42, and was able to work closely with the Cloud Development Scrum team.
  I worked on horizontally scalable Spring Boot microservices that combine the best aspects of different AWS products.
  I love asking questions that make engineers' eyes light up.`,
  aboutItems: [
    {label: 'Study', text: 'University of Minnesota-Twin Cities', Icon: AcademicCapIcon},
    {label: 'Location', text: 'Minneapolis, MN', Icon: MapIcon},
    {label: 'Interests', text: 'Cooking, Coffee, Puppy Dogs', Icon: SparklesIcon},
    {label: 'Employment', text: 'Code42', Icon: OfficeBuildingIcon},
    {label: 'Music', text: 'Simon & Garfunkel Enthusiast', Icon: MusicNoteIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend',
    skills: [
      {
        name: 'Kotlin',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C++',
        level: 4,
      },
    ]
  },
  {
    name: 'Tech',
    skills: [
      {
        name: 'AWS',
        level: 5,
      },
      {
        name: 'Google Colab',
        level: 4,
      },
      {
        name: 'Docker',
        level: 5,
      },
      {
        name: 'Git',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'JavaScript',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
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
    title: 'Chess AI',
    description: 'Currently working on integrating a chess app into this website.',
    url: 'https://github.com/zarns/chess-ai',
    image: chessImage,
  },
  {
    title: 'Voting Machine',
    description: 'Visualize the Instant Runoff Voting (IRV) algorithm.',
    url: 'https://github.com/zarns/voting-machine',
    image: ballotImage,
  },
  {
    title: 'Primate Pose Estimation',
    description: 'Experiment with different neural net architectures for pose recognition.',
    url: 'https://github.com/zarns/openMonkeyChallenge',
    image: monkeyImage,
  },
  {
    title: 'Quoridor AI',
    description: 'See if you can beat the Monte Carlo Tree Search algorithm. Good luck.',
    url: 'https://github.com/zarns/QuoridorAI',
    image: quoridorImage,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'University of Minnesota',
    title: 'B.S. Computer Science',
    content: 
    <p>
      <strong>Favorite Classes:</strong> Software Engineering, Computer Vision, Machine Learning Fundamentals, 
      Artificial Intelligence
    <br></br><br></br>
      I have a minor in chemistry thanks to
      <strong>
          <a href="http://www.savewalterwhite.com/"> Breaking Bad</a>
      </strong>. Ask me for a chemistry joke!
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'May - Dec 2022',
    location: 'Code42',
    title: 'Cloud SWE Intern',
    content: (
      <p>
        Designed and implemented feature that empowers customers 
        to configure their own data storage policies to improve price negotiablility.
        This feature was built using Kotlin, Spring Boot, Terraform, Docker, Concourse, 
        AWS(S3, DynamoDB, EC2, Cloudwatch, IAM, etc.)
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
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/21.jpg',
    },
    {
      name: 'Mike Zarns',
      text: 'Never let the magic smoke out of the PC. Once it escapes, it\'s really hard to put it back.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Unknown',
      text: 'One time I saw him spend two hours googling which brand of canned air was best to clean a pc with. He\'s nuts.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
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
