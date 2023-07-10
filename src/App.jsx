import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { FaQuoteRight } from 'react-icons/fa';

import { list } from './data';

const App = () => {
  const [people, setPeople] = useState(list);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow btn">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow btn">
          <MdOutlineArrowBackIosNew />
        </div>
      </div>
    ),
  };

  return (
    <main>
      <Slider {...settings}>
        {people.map(({ id, image, name, title, quote }) => (
          <article key={id}>
            <img src={image} alt={name} className="img" />
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
