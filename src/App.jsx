import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaQuoteRight } from 'react-icons/fa';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { list } from './data';

const App = () => {
  const [people, setPeople] = useState(list);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <Slider {...settings}>
        {people.map(({ id, image, name, title, quote }) => (
          <article key={id}>
            <img
              src={image}
              alt={name}
              className="img"
              style={{ width: '50px' }}
            />
            <h3>{name}</h3>
            <h5>{title}</h5>
            <p>{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
      </Slider>
    </main>
  );
};
export default App;
