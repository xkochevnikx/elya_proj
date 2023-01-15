import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { goToNext, goToPrevios, fetchSlides } from "../../Store/Slice";

const Carousel = () => {
  const dispatch = useDispatch();

  // const current = useSelector(state => state.slide.current);
  // const slides = useSelector(state => state.slide.slides);

  const { current, slides, status, error } = useSelector(state => state.slide);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 1rem;
  `;

  const SlideStyles = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 2px white;
    background-position: center;
    background-size: cover;
  `;

  const LeftArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 45px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
  `;

  const RightArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 45px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
  `;

  const DotContainerSlide = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `;

  const DotStyles = styled.div`
    margin: 0 3px;
    cursor: pointer;
    fontsize: 30px;
  `;

  const LoadingTitle = styled.h3`
    font-size: var(--fs-l);
    text-align: center;
  `;

  function GoNext() {
    dispatch(goToNext());
  }

  function GoPrev() {
    dispatch(goToPrevios());
  }

  return (
    <Wrapper>
      {slides ? (
        <SlideStyles
          style={{ backgroundImage: `url(${slides[current].url})` }}
        />
      ) : (
        <LoadingTitle>ЗАГРУЖАЮ...</LoadingTitle>
      )}
      {error && <h3>{error}</h3>}

      <LeftArrowStyles onClick={GoPrev}>❮</LeftArrowStyles>
      <RightArrowStyles onClick={GoNext}>❯</RightArrowStyles>
      <DotContainerSlide>
        {slides &&
          slides.map((slide, index) => <DotStyles key={index}>☼</DotStyles>)}
      </DotContainerSlide>
    </Wrapper>
  );
};

export default Carousel;
