import { styled,css } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';

const Container=styled.div`
height: 100vh;
overflow: hidden;
position: relative;
/* background-color: black ; */
`

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0%;
left: 0%;
z-index: -1;
`
const IntroSec=styled.div`
${Shape}
clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 60% 100%, 50% 49%, 74% 0);background-color: blueviolet;
overflow: hidden;

`
const FeatureSec=styled.div`
clip-path: polygon(0% 0%, 31% 0, 47% 50%, 30% 100%, 0% 100%);background-color: blueviolet;
${Shape}
overflow: hidden;
`

function App() {
  return (<>
   <Container>
  <Navbar/>
  <Intro/>  
  <IntroSec/>
   </Container>

   <Container>
    <Feature/>
    <FeatureSec/>
   </Container>
   </>
  );
}

export default App;
