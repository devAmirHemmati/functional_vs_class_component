import Products from './components/Products';

const DUMMY_PRODUCTS = [
  {
    productName: 'first product',
  },
  {
    productName: 'second product',
  },
  {
    productName: 'third product',
  },
  {
    productName: 'forth product',
  },
  {
    productName: 'fifth product',
  },
];

const App = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Products products={DUMMY_PRODUCTS} />
    </div>
  );
};

export default App;
