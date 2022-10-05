import styled from '@emotion/styled';
import { breakPoints as bp } from './styles/breakPoints';
import React from 'react';
import './App.css';
import Main  from './components/Main';


const Container = styled.div `
  ${bp.desktop} {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
