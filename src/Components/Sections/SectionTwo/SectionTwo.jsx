import React from "react";
import styled from "styled-components";
import { Container } from "../Container/Container";

const SectionElement = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  text-align: center;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 13px;
    width: 45%;
    height: 2px;
    background-color: white;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 13px;
    width: 45%;
    height: 2px;
    background-color: white;
  }
`;

const Wrapper = styled.div``;

const SubTitle = styled.p`
  text-align: center;
  font-weight: var(--fw-200);
  font-size: var(--fs-m);
  line-height: 150%;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
`;

const SectionTwo = () => {
  return (
    <SectionElement>
      <Title>О нас</Title>
      <Container>
        <Wrapper>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur. Eu nunc vivamus tristique
            sit iaculis ut integer. Pulvinar nunc purus pellentesque amet
            dictumst pellentesque pellentesque in. Enim senectus semper augue
            risus neque sodales. Sed cras vulputate facilisis enim sed. Dictum
            massa nunc pellentesque tortor in turpis laoreet. In non commodo sit
            duis pellentesque elit lorem suspendisse. Porttitor semper facilisis
            eget at proin ut laoreet bibendum. Scelerisque morbi placerat vitae
            lorem ornare nulla sem mattis. Accumsan elementum facilisis a
            aliquam posuere eu non vivamus. Sagittis viverra nisl facilisis
            magna egestas ultrices aliquam. Cras in est placerat morbi. Augue eu
            adipiscing sit tristique tempor ligula. Egestas nullam nec volutpat
            diam fames eget egestas integer. Arcu ac ut tristique eget ornare
            eleifend nunc ac. Aliquet fringilla velit suspendisse ipsum amet at.
            Maecenas molestie velit diam varius massa fames id. Sapien sed
            adipiscing nec adipiscing. Iaculis nisl ultrices imperdiet eget
            lacus arcu consectetur maecenas eu. Cras justo et egestas ac purus
            volutpat morbi. Imperdiet neque eu feugiat lorem nisl malesuada
            nisl.
          </SubTitle>
        </Wrapper>
      </Container>
    </SectionElement>
  );
};

export default SectionTwo;
