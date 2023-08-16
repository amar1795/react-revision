import { styled,css } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Services from './components/Services';
import Pricecontainer from './components/Pricecontainer';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container=styled.div`
height: 100vh;
overflow: hidden;
position: relative;
/* background-color: black ; */
`

// common css
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
clip-path: polygon(0% 0%, 31% 0, 47% 50%, 30% 100%, 0% 100%);
background-color: blueviolet;
${Shape}
overflow: hidden;
`
const FeatureServices=styled.div`
clip-path: polygon(13% 0, 40% 0, 26% 100%, 0% 100%);
background-color: blueviolet;
${Shape}
overflow: hidden;
`
const Priceanimation=styled.div`
clip-path: polygon(0% 0%, 0% 100%, 10% 100%, 10% 9%, 92% 8%, 92% 92%, 0 92%, 2% 100%, 100% 100%, 100% 0);
background-color: blueviolet;
${Shape}
overflow: hidden;
`

const Contactstyle=styled.div`
clip-path: inset(0 0 0 55%);
background-color: blueviolet;
${Shape}
overflow: hidden;
`



function App() {
  const smallscreen=window.screen.width <=480 ?true :false
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

  <Container>
   <Services/>
    {!smallscreen && <FeatureServices/>}
   </Container>

   <Container>
   <Pricecontainer/>
   {!smallscreen && <Priceanimation/>}

    
   </Container>

   <Container>
    <Contact/>
    <Contactstyle/>
    <Footer/>
   </Container>
   </>
  );
}

export default App;
