import { Routes, Route } from 'react-router-dom';
import ListInventory from './listinventory'; 
import AddInventory from './addinventory';
import UpdateInventory from './updateinventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListInventory />} />
        <Route path="/add" element={<AddInventory />} />
        <Route path="/edit/:id" element={<UpdateInventory />} />
      </Routes>
    </div>
  );
}

export default App;