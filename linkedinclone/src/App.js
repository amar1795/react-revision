import './App.css';
import Footer from './components/Footer';
// import Mainpage from './components/Mainpage';
import Mainsection from './components/Mainsection';
import Navbar from './components/Navbar';
import { styled } from 'styled-components';

const Mainpage =styled.div`
height: 100vh;
width: 100%;
`

function App() {
  return (   
     <Mainpage>
      <Navbar/>
      <Mainsection/>
      <Footer/>
     </Mainpage>
    
  );
}

export default App;
