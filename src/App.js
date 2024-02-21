import logo from './logo.svg';
import './App.css';
import Additems from './components/Additems';
import Search from './components/Search';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' exact element={<Additems/>}/>
      <Route path='search' exact element={<Search/>}/>
      <Route path='Viewall' exact element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
