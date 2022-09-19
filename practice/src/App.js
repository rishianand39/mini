import { Container } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Container border="1px solid" height="100vh" maxW='50vw'>
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

export default App;
