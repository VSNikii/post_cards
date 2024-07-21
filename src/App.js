import 'macro-css';
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js';
import Slogan from './components/Slogan/Slogan.js';
import Sell from './components/Sellers/Sellers.js';
import Quote from './components/Quote/Quote.js';
import Advantages from './components/Advantages/Advantages.js';
import Birthday from './components/Birthday/Birthday.js';
import Products from './components/Products/Products.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App clear">
      <Nav/>
      <Header/>
      <Slogan/>
      <Sell/>
      <Quote/>
      <Advantages/>
      <Birthday/>
      <Products/>
      <img className='imgEnd' src='/img/end.jpg' alt='end'/>
      <Footer/>
    </div>
  );
}

export default App;
