import styled from "styled-components"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Landing from "./Components/Landing/Landing"
import Work from "./Components/Work/Work"
import Test from "./Components/Test/Test"

const Container =styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
    display:none;
  }
  color:white;
  background: url("./img/bg.jpeg") ;
}
`
function App() {

  return (
    <Container>
        <Landing />
        <About />
        <Work />
        <Contact /> 
    </Container>
  )
}

export default App
