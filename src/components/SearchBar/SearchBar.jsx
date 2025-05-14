import { useState } from 'react';
import productos from '/productos.json';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();

    for (const [categoria, subcategorias] of Object.entries(productos)) {
      for (const [subcategoria, items] of Object.entries(subcategorias)) {
        for (const producto of items) {
          if (producto.toLowerCase().includes(lowerQuery)) {
            const path = `/${categoria.toLowerCase().replace(/ /g, '-')}`;
            const hash = `#${subcategoria.toLowerCase().replace(/ /g, '-')}`;
            navigate(`${path}${hash}`);
            return;
          }
        }
      }
    }

    alert('Producto no disponible por el momento.');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex items-center bg-white rounded-4xl w-64 h-8 px-4 shadow-md shadow-black/25">
      <input
        type="text"
        className="focus:outline-none"
        placeholder="Buscar producto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="bg-none text-black py-2 rounded w-6 absolute opacity-15 flex ml-50"
      >
        <img src='/img/search.png' alt='Lupa'/>
      </button>
    </div>
  );
}
