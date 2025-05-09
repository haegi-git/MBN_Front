import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderLeft() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };
  return (
    <div className="flex items-center gap-4">
      <Link to="/" className="text-blue-500 font-bold text-xl">
        M
      </Link>

      {/* 검색창 */}
      <div className="relative hidden md:block">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search (ctrl + k)"
          className="pl-8 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
}
