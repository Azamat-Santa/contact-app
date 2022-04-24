
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import ContactDetails from './pages/ContactDetails/ContactDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactDetails" element={<ContactDetails />} />  
      </Routes>
    </div>
  );
}

export default App;
