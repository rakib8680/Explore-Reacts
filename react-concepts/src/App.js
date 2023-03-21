import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Samsung', price: 30000 },
    { name: 'Apple', price: 60000 },
    { name: 'Huawei', price: 50000 },
    { name: 'BMW', price: 90000 }
  ];

  return (
    <div className="App">
      {
        products.map(product =><Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Samsung" price="30000"></Product>
      <Product name="Apple" price="60000"></Product>
      <Product name="Huawei" price="40000"></Product> */}
    </div>
  );
}


function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
