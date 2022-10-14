import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1665041158280-6f58c1936c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
`;
const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;
const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;
const OptBoxesWrapper = styled.div`
  /* border: 1px solid pink; */
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.input`
  border: 1px solid red;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitBtn = styled.input`
  padding: 5px 20px;
  font-size: 1.2rem;
  margin-top: 30px;
  cursor: pointer;
  background: purple;
  border: none;
  color: white;
  border-radius: 5px;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Text>OTP</Text>
        <OptBoxesWrapper>
          <Box />
          <Box />
          <Box />
          <Box />
        </OptBoxesWrapper>
        <SubmitBtn type="submit" value="verify" />
      </Wrapper>
    </Container>
  );
}

export default App;
