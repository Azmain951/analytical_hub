import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
