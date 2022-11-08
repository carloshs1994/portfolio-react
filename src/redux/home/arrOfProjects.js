import MarketOverviewImg from '../../img/market-overview.png';
import ChooseYourPokemon from '../../img/choose-your-pokemon.png';
import ChooseYourPokemonMobile from '../../img/choose-your-pokemon-mobile.png';
import EasyScience from '../../img/easy-science.png';
import EasyScienceMobile from '../../img/easy-science-mobile.png';
import Catstagram from '../../img/catstagram.png';
import CatstagramMobile from '../../img/catstagram-mobile.png';
import ToDoList from '../../img/to-do-list.png';
import Ecommerce from '../../img/99-ecommerce.png';
import EcommerceMobile from '../../img/99-ecommerce-mobile.png';
import RedditClone from '../../img/reddit-clone.png';

const arrOfProjects = [
  {
    image: Ecommerce,
    mobileImage: EcommerceMobile,
    title: '99-ecommerce',
    languages: ['Next', 'TypeScript', 'Tailwind', 'MongoDB', 'PayPal'],
    description: 'This is a Full-Stack E-commerce website. It was built using Next.js, TypeScript, MongoDB and Mongoose to save and retrieve data like products, orders and users, styled with Tailwind, and PayPal API to make online payments (Requires a mock Credit Card to test this feature).',
    linkLiveVersion: 'https://99-ecommerce.vercel.app/',
    linkToSource: 'https://github.com/carloshs1/99-ecommerce',
  },
  {
    image: RedditClone,
    mobileImage: RedditClone,
    title: 'Reddit Clone',
    languages: ['Next.js', 'TypeScript', 'Tailwind', 'GraphQL', 'Supabase', 'Reddit API'],
    description: 'This Reddit Clone is a Full-Stack Web App (Desktop only). It was built using Next.js, TypeScript, GraphQL connected to a PostgreSQL Supabase DB using Stepzen, styled with Tailwind and uses Reddit API to sign in users.',
    linkLiveVersion: 'https://reddit-chs.vercel.app/',
    linkToSource: 'https://github.com/carloshs1/reddit-chs',
  },
  {
    image: Catstagram,
    mobileImage: CatstagramMobile,
    title: 'Catstagram',
    languages: ['Next.js', 'TypeScript', 'Tailwind', 'Recoil', 'REST', 'Nextauth'],
    description: 'Built for catlovers, by a catlover! This is a instagram semi-clone. Built using Next.js, TypeScript, Recoils for Global State, Nextauth, styled with Tailwind.',
    linkLiveVersion: 'https://catstagram-two.vercel.app/',
    linkToSource: 'https://github.com/carloshs1/catstagram',
  },
  {
    image: MarketOverviewImg,
    mobileImage: MarketOverviewImg,
    title: 'Market Overview',
    languages: ['React', 'Redux', 'SASS', 'Axios'],
    description: 'Market Overview is a website designed to showcase the US stock market. You could find details about the stock of choice and improve your strategies. Built using React, Redux, SASS, and tested using React testing library.',
    linkLiveVersion: 'https://carloshs1994.github.io/market-overview/',
    linkToSource: 'https://github.com/carloshs1994/market-overview',
  },
  {
    image: ChooseYourPokemon,
    mobileImage: ChooseYourPokemonMobile,
    title: 'Choose your Pokemon',
    languages: ['JavaScript', 'SASS', 'webpack', 'Jest', 'API'],
    description: 'The complete website for pokefans to pick the best pokemon. This capstone project was built using JavaScript, bundled using webpack and tested using jest.',
    linkLiveVersion: 'https://carloshs1994.github.io/choose-your-pokemon/',
    linkToSource: 'https://github.com/carloshs1994/choose-your-pokemon',
  },
  {
    image: ToDoList,
    mobileImage: ToDoList,
    title: 'To-Do list',
    languages: ['JavaScript', 'webpack', 'ES6', 'CSS'],
    description: 'This is an app to store, display and remove task from your list. The main funtinality is adding, editing, deleting and drag and drop. This project was built using modern CSS3 and ES6. Built using webpack.',
    linkLiveVersion: 'https://carloshs1994.github.io/To-Do-List/dist/',
    linkToSource: 'https://github.com/carloshs1994/To-Do-List',
  },
  {
    image: EasyScience,
    mobileImage: EasyScienceMobile,
    title: 'Easy Science',
    languages: ['JavaScript', 'HTML', 'CSS'],
    description: 'EasyScience is a mock online school that offers help in math science and chemistry. You could look at several courses and choose your favorite. Built using JavaScript. *This project was designed to consolidate my knowledge of HTML and CSS*',
    linkLiveVersion: 'https://carloshs1994.github.io/easyscience/',
    linkToSource: 'https://github.com/carloshs1994/easyscience',
  },
];

export default arrOfProjects;
