import React from 'react';
import { hot } from 'react-hot-loader';
import { Slider, Container } from 'react-styled-carousel';

import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import ExampleCard from './ExampleCard';

const responsive = [
  { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 1 },
];

const Root = () => (
  <Container>
    <h1>Styled Carousel Example</h1>
    <Slider 
      responsive={responsive}
      autoSlide={false}
      infinite={false}
      // LeftArrow={LeftArrow}
      // RightArrow={RightArrow}
    >
      <ExampleCard>1</ExampleCard>
      <ExampleCard>2</ExampleCard>
      <ExampleCard>3</ExampleCard>
      <ExampleCard>4</ExampleCard>
      <ExampleCard>5</ExampleCard>
      <ExampleCard>6</ExampleCard>
    </Slider>
  </Container>
);

export default hot(module)(Root);
