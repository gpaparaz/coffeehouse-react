import './App.css';
import Header from './components/header-component';
import Home from './pages/home';
import style from './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';


function App() {
      //   const nav = [
      //     {url: "/", text: "Home", exact: true},
      //     {url: "/products", text: "Products", exact: false},
      //     {url: "/about-us", text: "About us", exact: true}
      // ];
      //   return (
      // <BrowserRouter>

      // <MainTemplate
      // >

      //     <Routes>
      //         <Route path="/" element={<Home />}/>
      //         {/* <Route path="/pokedex" element={<Pokedex />}/>
      //         <Route path="/info" element={<Info />}/>
      //         <Route path="/pokedex/:number" element={<PokemonDetail />}/> */}
      //     </Routes>

      // </MainTemplate>

      // </BrowserRouter>

      return <div>
            <Header></Header>
            <Home></Home></div>

}

export default App;
