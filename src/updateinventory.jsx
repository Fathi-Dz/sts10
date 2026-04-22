import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from './inventorySlice';
const UpdateInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const barangLama = useSelector(state => 
    state.inventory.items.find(item => item.id === parseInt(id))
  );

  // Inisialisasi form dengan data lama
  const [form, setForm] = useState(barangLama || { nama: '', jumlah: 0 });

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateItem(form));
    navigate('/'); 
  };

  if (!barangLama) return <p style={{ padding: '20px' }}>Barang tidak ditemukan!</p>;

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h2>📝 Edit Inventaris Masjid</h2>
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <label>Nama Barang:</label>
        <input 
          type="text"
          value={form.nama} 
          onChange={e => setForm({...form, nama: e.target.value})} 
          placeholder="Contoh: Al-Qur'an"
          required
        />
        
        <label>Kuantitas:</label>
        <input 
          type="number"
          value={form.jumlah} 
          onChange={e => setForm({...form, jumlah: parseInt(e.target.value) || 0})} 
          placeholder="Jumlah"
          required
        />
        
        <button type="submit" className="btn btn-save" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
          Simpan Perubahan
        </button>
        
        <button 
          type="button" 
          className="btn" 
          style={{ background: '#ccc', padding: '10px', border: 'none', cursor: 'pointer' }} 
          onClick={() => navigate('/')}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default UpdateInventory;