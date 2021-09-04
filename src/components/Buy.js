import BuyClassComponent from './BuyClassComponent';
import BuyFunctionalComponent from './BuyFunctionalComponent';

const Buy = ({ productName, isShow }) => {
  if (!isShow) return null;
  return (
    <div
      className="card p-4 mx-auto"
      style={{
        maxWidth: '100%',
        width: 600,
      }}
    >
      <h1 className="h1 text-center mb-4 pb-2">{productName}</h1>

      <div className="d-flex align-items-center justify-content-around">
        <BuyFunctionalComponent
          message={`you buy ${productName} in functional component`}
        />

        <BuyClassComponent
          message={`you buy ${productName} in class component`}
        />
      </div>
    </div>
  );
};

export default Buy;
