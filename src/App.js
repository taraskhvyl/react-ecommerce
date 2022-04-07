import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="shop" element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default App;
