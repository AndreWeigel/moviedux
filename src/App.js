import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">

        <div className="container">
            <Header></Header>
        </div>

        <Counter />


        <Footer></Footer>

    </div>
  );
}

export default App;
