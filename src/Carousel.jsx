import { FaQuoteRight } from 'react-icons/fa';

const Carousel = ({ people, currentPerson }) => {
  const { image, name, quote, title } = people[currentPerson];

  return (
    <article>
      <img src={image} alt={name} className="img" />
      <h3>{name}</h3>
      <h5>{title}</h5>
      <p>{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};
export default Carousel;
