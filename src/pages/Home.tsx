import React from "react";
import styled from "styled-components";

const ContentsWrapper = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
  position: relative;
  :nth-child(1) {
    background-color: red;
  }
  :nth-child(2) {
    background-color: green;
  }
  :nth-child(3) {
    background-color: blue;
  }
`;
function Home() {
  return (
    <>
      <nav></nav>
      <ContentsWrapper>
        <Section>1</Section>
        <Section>2</Section>
        <Section>3</Section>
      </ContentsWrapper>
      <footer></footer>
    </>
  );
}

export default Home;
