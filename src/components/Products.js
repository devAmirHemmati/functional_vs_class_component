import { useState } from 'react';
import Buy from './Buy';

const Products = ({ products }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handleNextActiveCard = () => {
    if (activeCard === products.length - 1) return;

    setActiveCard((prevState) => prevState + 1);
  };

  const handlePrevActiveCard = () => {
    if (activeCard === 0) return;

    setActiveCard((prevState) => prevState - 1);
  };

  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-primary"
        onClick={handlePrevActiveCard}
        disabled={activeCard === 0}
      >
        {'<'}
      </button>

      <div className="px-4 mx-4">
        {products.map((product, key) => (
          <Buy {...product} isShow={activeCard === key} key={key} />
        ))}
      </div>

      <button
        className="btn btn-primary ml-3"
        onClick={handleNextActiveCard}
        disabled={activeCard === products.length - 1}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Products;
