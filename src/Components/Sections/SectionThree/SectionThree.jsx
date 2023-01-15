import React from "react";
import styled from "styled-components";
import Carousel from "../../Carousel/Carousel";
import { Container } from "../Container/Container";

const SectionThree = () => {
  const SectionElement = styled.section`
    width: 100%;
    margin-bottom: 3rem;
  `;

  const Wrapper = styled.div`
    width: 850px;
    height: 400px;
    margin: 0 auto;
  `;

  const Title = styled.h2`
    text-align: center;

    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 13px;
      width: 40%;
      height: 2px;
      background-color: white;
    }

    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 13px;
      width: 40%;
      height: 2px;
      background-color: white;
    }
  `;

  return (
    <SectionElement>
      <Title>Лучшие предложения</Title>
      <Container>
        <Wrapper>
          <Carousel />
        </Wrapper>
      </Container>
    </SectionElement>
  );
};

export default SectionThree;
