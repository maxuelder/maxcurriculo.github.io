import { styled } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppContainer = styled.div`
width: 99vw;
height: 100vh;

 
`

function App(){
  return(
    <AppContainer>
      <Header/>
      <Body/>
      <Footer/>
    </AppContainer>
  )
}

export default App;
