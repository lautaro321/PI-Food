
import { BrowserRouter, Routes , Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Home from './Components/Home';
import CreateRecipe from "./Components/CreateRecipe"
import DetailRecipe from "./Components/DetailRecipe"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/recipe/:id" element={<DetailRecipe/>}></Route>
        <Route exact path="/create" element={<CreateRecipe/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;