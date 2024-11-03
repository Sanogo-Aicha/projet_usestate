import logo from './logo.svg';
import './App.css';
import './Components/Moviecards.css'
import MovieList from './Components/MoviesList';
import { Card } from 'react-bootstrap';
import Barre from './Components/Barre_resh';
import Movicard from './Components/Moviecards';
import Film from './data/data';
import Renseigner from './Components/Renseigner';


function App() {  
  return (
    <div>
      <div className="App">
      <Card className='card'>
      <MovieList />
      </Card>
      
    </div>
    
    </div>
  );
}

export default App;
