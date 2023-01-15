import React from "react";
import styled from "styled-components";
import { Container } from "../Container/Container";
import chip from "../../Image/chipMain.jpg";

const SectionOne = () => {
  const SectionElement = styled.section`
    width: 100%;
    margin-bottom: 2rem;
  `;

  const Wrapper = styled.div`
    position: relative;
  `;

  const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `;

  const InfoTitle = styled.h2`
    text-align: center;
    font-family: var(--family-extra);
    font-size: var(--fs-xl);
    margin-top: 4rem;

    @media (max-width: 1024px) {
      font-size: var(--fs-l);
    }
  `;

  const InfoSubtitle = styled.h2`
    width: 45%;
    font-size: var(--fs-s);
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;
    font-weight: var(--fw-200);
    margin: 3rem 0 0 3rem;
  `;

  const ListSubTitle = styled.ul`
    width: 45%;
    display: flex;
    justify-content: space-around;
    font-size: var(--fs-s);
    gap: 1.5rem;
    font-weight: var(--fw-200);
    margin: 9rem 0 0 3rem;
  `;

  const ListItemSubTitle = styled.li`
    text-align: center;
    font-family: var(--family-extra);
    list-style: none;
    cursor: pointer;

    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background-color: white;
    }
    &:hover:before {
      width: 100%;
    }
    &::before {
      transition: width 0.35s;
    }
  `;

  return (
    <SectionElement>
      <Container>
        <Wrapper>
          <InfoImage src={chip} />
          <InfoBox>
            <InfoTitle>
              Lorem ipsum dolor sit
              <br />
              amet
            </InfoTitle>
            <InfoSubtitle>
              Lorem ipsum dolor sit amet consectetur. Pharetra enim donec ornare
              lectus. Sed fames massa mi ut aliquet nullam ac aliquam. Est
              viverra ut iaculis pellentesque. Eu et nibh fringilla nec
              fringilla rhoncus.
            </InfoSubtitle>
            <ListSubTitle>
              <ListItemSubTitle>
                Lorem ipsum <br /> dolor
              </ListItemSubTitle>
              <ListItemSubTitle>
                Lorem ipsum <br /> dolor
              </ListItemSubTitle>
              <ListItemSubTitle>
                Lorem ipsum <br /> dolor
              </ListItemSubTitle>
            </ListSubTitle>
          </InfoBox>
        </Wrapper>
      </Container>
    </SectionElement>
  );
};

export default SectionOne;
