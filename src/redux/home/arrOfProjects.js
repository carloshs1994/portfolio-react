import MarketOverviewImg from '../../img/market-overview.png';
import ChooseYourPokemon from '../../img/choose-your-pokemon.png';
import ChooseYourPokemonMobile from '../../img/choose-your-pokemon-mobile.png';
import SpaceX from '../../img/spaceX.png';
import EasyScience from '../../img/easy-science.png';
import EasyScienceMobile from '../../img/easy-science-mobile.png';
import MathMagicians from '../../img/math-magicians.png';
import Bookstore from '../../img/bookstore.png';
import ToDoList from '../../img/to-do-list.png';

const arrOfProjects = [
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
    image: SpaceX,
    mobileImage: SpaceX,
    title: 'spaceX',
    languages: ['React', 'Redux', 'Bootstrap', 'Axios'],
    description: 'Inspired by the amazing company SpaceX, we built a mock website (Desktop only) to showcase info about this company, like rockets and missions. It allows you to reserve rockets and a missions at will. You can then view all your reserved rockets and missions in your profile page. We built this website using React and Redux and we style it using React Bootstrap.',
    linkLiveVersion: 'https://carloshs1994.github.io/spaceX/',
    linkToSource: 'https://github.com/carloshs1994/spaceX',
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
  {
    image: MathMagicians,
    mobileImage: MathMagicians,
    title: 'Math Magicians',
    languages: ['React', 'React-router', 'SASS'],
    description: '"Math Magicians" is an app for mathlovers (Desktop only). It contains a calculator for basic operations! It was created using React and SASS.',
    linkLiveVersion: 'https://carloshs1994.github.io/math-magicians/',
    linkToSource: 'https://github.com/carloshs1994/math-magicians',
  },
  {
    image: Bookstore,
    mobileImage: Bookstore,
    title: 'Bookstore',
    languages: ['React', 'Redux', 'SASS', 'Axios'],
    description: 'This is an app to store the books you are reading (Desktop only). It uses an API to store and fetch the data to track your progress. It was created using React and Redux. Styled using SASS.',
    linkLiveVersion: 'https://carloshs1994.github.io/bookstore-react-redux/',
    linkToSource: 'https://github.com/carloshs1994/bookstore-react-redux',
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
];

export default arrOfProjects;