const BuyFunctionalComponent = ({ message }) => {
  const handleShowAlert = () => {
    alert(message);
  };

  const handleClick = () => {
    setTimeout(handleShowAlert, 2000);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <button className="btn btn-success" onClick={handleClick}>
        Buy
      </button>

      <p className="text-secondary fw-bold mt-3 mb-0">Functional Component</p>
    </div>
  );
};

export default BuyFunctionalComponent;
