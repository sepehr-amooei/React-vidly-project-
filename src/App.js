import './App.css';
import Movies from './components/movies';
import NavBar from './components/navbar';
import Rental from './components/rental';
import Customers from './components/customers';
import NotFound from './components/notFound';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <NavBar />
      <Routes>
        <Route path='/customers' Component={Customers} />
        <Route path='/Rental' Component={Rental} />
        <Route path='/not-found' Component={NotFound}/> 
        <Route path='/movies' Component={Movies} />
        <Route path="/" element={<Navigate to='/movies' />} />
        <Route path="*" element={<Navigate to='/not-found' />} />
      </Routes>
  </main>
  );
}

export default App;
