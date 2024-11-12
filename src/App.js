import logo from './logo.svg';
import './App.css';
import './Components/Moviecards.css'
import MovieList from './Components/MoviesList';
import { Routes,Route } from 'react-router-dom';
import Description1 from './Components/Description1';

function App() {  
  return (
    
    <Routes>
      <Route path='/' element={<MovieList/>}/>
      <Route path='/desc/:id' element={<Description1 />}/>
    </Routes>
    
  );
}

export default App;
