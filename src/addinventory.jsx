import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './inventorySlice';
import { useNavigate } from 'react-router-dom';

const AddInventory = () => {

  const [form, setForm] = useState({ nama: '', jumlah: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    dispatch(addItem({ 
      id: Date.now(), 
      nama: form.nama, 
      jumlah: parseInt(form.jumlah) || 0 
    }));
    
    navigate('/');
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h2> Tambah Inventaris Masjid</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input 
          placeholder="Nama Barang (misal: Sajadah)" 
          required 
          value={form.nama}
          onChange={e => setForm({...form, nama: e.target.value})} 
        />
        <input 
          type="number"
          placeholder="Kuantitas/Jumlah" 
          required 
          value={form.jumlah}
          onChange={e => setForm({...form, jumlah: e.target.value})} 
        />
        <button type="submit" className="btn btn-save" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', cursor: 'pointer', border: 'none' }}>
          Simpan Barang
        </button>
        <button 
          type="button" 
          onClick={() => navigate('/')} 
          style={{ background: '#ccc', padding: '10px', border: 'none', cursor: 'pointer' }}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default AddInventory;