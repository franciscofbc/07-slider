import { useEffect, useState } from 'react';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { list } from './data';

import Carousel from './Carousel';

const App = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextPerson();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentPerson]);

  const prevPerson = () => {
    setCurrentPerson((prevPerson) =>
      prevPerson === 0 ? people.length - 1 : prevPerson - 1
    );
  };
  const nextPerson = () => {
    setCurrentPerson((prevPerson) =>
      prevPerson === people.length - 1 ? 0 : prevPerson + 1
    );
  };

  return (
    <main>
      <button type="button" className="btn" onClick={prevPerson}>
        <MdOutlineArrowBackIosNew />
      </button>
      <section>
        <Carousel people={people} currentPerson={currentPerson} />
      </section>
      <button type="button" className="btn" onClick={nextPerson}>
        <MdOutlineArrowForwardIos />
      </button>
    </main>
  );
};
export default App;
