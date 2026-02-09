import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './routes/Home';
import CardsPage from './routes/Cards';
import AddPage from './routes/Add';
import EditPage from './routes/Edit';
import LoginPage from './routes/Login';
function App() {
  return (
    <div className="App">
      <h1>Card Management App</h1>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/cards">Cards</Link>
      </nav>
      <hr></hr>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cards' element={<CardsPage/>}/>
        <Route path='/cards/new' element={<AddPage/>}/>
        <Route path='/cards/:id/edit' element={<EditPage/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <footer>
        <hr></hr>
        <p>@ Melissa</p>
      </footer>
    </div>
  );
}

export default App;
