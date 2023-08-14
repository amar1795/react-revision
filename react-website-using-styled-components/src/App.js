import { styled } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

const Container=styled.div`
height: 100vh;
overflow: hidden;
/* background-color: black ; */
`

function App() {
  return (
   <Container>
  <Navbar/>
  <Intro/>  
   </Container>
  );
}

export default App;
