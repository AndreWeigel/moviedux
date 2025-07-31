import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import Watchlist from "./components/Watchlist";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {useState, useEffect} from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    useEffect(() => {
    fetch('movies.json')
        .then(res => res.json())
        .then(data => setMovies(data));
    }, []);

    const toggleWatchlist = (movieID) => {
      setWatchlist(prev => {
        if (prev.includes(movieID)) {
          // If the movie is already in the list, remove it
          return prev.filter(id => id !== movieID);
        } else {
          // If it's not in the list, add it
          return [...prev, movieID];
        }
      });
    };
    return (
        <div className="App">

            <div className="container">
                <Header></Header>


                <Router>
                    <nav role="navigation">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/watchlist">Watchlist</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<MovieGrid
                            movies={movies} watchlist = {watchlist}
                            toggleWatchlist={toggleWatchlist}
                        />}></Route>
                        <Route path="/watchlist" element={<Watchlist
                            movies={movies}
                            watchlist = {watchlist}
                            toggleWatchlist={toggleWatchlist}
                        />}></Route>
                    </Routes>
                </Router>

            </div>




            <Footer></Footer>

        </div>
      );
    }

    export default App;
