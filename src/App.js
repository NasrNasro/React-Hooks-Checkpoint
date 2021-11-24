import Navb from './Navbar';
import Add from './Add';
import './App.css';
import  React, {useState} from 'react';
import Movielist from './MovieList';
import Footer from './Footer';


function App() {
  const[movies, setMovies] = useState([{id:0, title:"Avengers: Infinity War", desc:"Action, Science fiction", img:"https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg", rate: 4},
  {id:1, title:"Fast and Furious: Hobbs & Shaw", desc:"Action, Adventure, Thriller", img:"https://fr.web.img4.acsta.net/pictures/19/06/13/16/39/3685647.jpg", rate: 4.5},
  {id:2, title:"Pirates of the Caribbean: Dead Men Tell No Tales", desc:"Action, Adventure, Fantasy", img:"https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_.jpg", rate: 5}
  ]);

  const [searchTitle,setSearchTitle]=useState("")
  const [searchRate,setSearchRate]=useState(5)
  
  return (
    <div className="App">
      <Navb setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} />
      <Add movies = {movies} setMovies = {setMovies} />
      <Movielist movies = {movies} setMovies = {setMovies} searchTitle={searchTitle} searchRate={searchRate} />
      <Footer />
    </div>
  );
}

export default App;
