import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}

export default App;


// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))

//   }, [])

//   return (
//     <div>
//       <h1>All the countries around the world</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h4>Name: {props.name}</h4>
//       <p>Population : {props.population}</p>
//     </div>
//   )
// }
