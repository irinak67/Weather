import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import HistoryPage from './Pages/HistoryPage.jsx';
import { Header } from '../src/Components/Header';

function App() {
  return (
    <div className="App">     
      <Header/>
      <Routes>               
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/History" element={<HistoryPage/>}/>                 
      </Routes>  
    </div>
  );
}

export default App;