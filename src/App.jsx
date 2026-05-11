import { Routes, Route } from 'react-router-dom';
import ListInventory from './listinventory'; 
import AddInventory from './addinventory';
import UpdateInventory from './updateinventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<ListInventory />} />
        
        {/* Halaman Tambah */}
        <Route path="/add" element={<AddInventory />} />
        
        {/* Halaman Edit dengan ID */}
        <Route path="/edit/:id" element={<UpdateInventory />} />

        {/* Catch-all route: Jika user nyasar, lempar kembali ke ListInventory 
            atau tampilkan pesan sederhana */}
        <Route path="*" element={<ListInventory />} />
      </Routes>
    </div>
  );
}

export default App;