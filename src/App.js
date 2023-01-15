import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <BrowserRouter>
      <Carousel />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
