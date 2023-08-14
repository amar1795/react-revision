import { styled } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

const Container=styled.div`
height: 100vh;
overflow: hidden;
/* background-color: black ; */
`
const IntroSec=styled.div`
clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 60% 100%, 50% 49%, 74% 0);background-color: blueviolet;
width: 100%;
height: 100%;
position: absolute;
top: 0%;
left: 0%;
z-index: -1;
overflow: hidden;

`

function App() {
  return (
   <Container>
  <Navbar/>
  <Intro/>  
  <IntroSec/>
   </Container>
  );
}

export default App;
