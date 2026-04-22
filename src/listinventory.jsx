import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './inventorySlice'; 
import { Link } from 'react-router-dom';

const ListInventory = () => {
  const items = useSelector((state) => state.inventory.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <header className="list-header">
        <h1>Daftar Inventaris Masjid</h1>
        <Link to="/add" className="btn-add-main">
          <span>+</span> Tambah Barang Baru
        </Link>
      </header>

      <div className="inventory-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="card-content">
                <div className="item-info">
                  <h3>{item.nama}</h3>
                  <p>Stok Tersedia</p>
                </div>
                <div className="item-qty">
                  {item.jumlah}
                  <span>pcs</span>
                </div>
              </div>
              <div className="card-actions">
                <Link to={`/edit/${item.id}`} className="action-btn edit">
                  Edit
                </Link>
                <button 
                  className="action-btn delete"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>Belum ada barang terdaftar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListInventory;