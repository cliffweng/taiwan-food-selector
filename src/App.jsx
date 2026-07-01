import { useState, useEffect, useRef } from 'react';
import { Search, Copy, RefreshCw, Check, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { foodData, foodCategories } from './data/foodData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [toasts, setToasts] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wheelFoods, setWheelFoods] = useState([]);
  const [wheelResult, setWheelResult] = useState(null);
  const [spinCount, setSpinCount] = useState(0);
  
  const wheelRef = useRef(null);

  // Initialize wheel foods with 8 random items from all foods
  useEffect(() => {
    initializeWheelFoods();
  }, []);

  const initializeWheelFoods = (category = 'all') => {
    const pool = category === 'all' 
      ? foodData 
      : foodData.filter(item => item.category === category);
    
    // Shuffle and pick 8
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);
    
    // Fill up to 8 if pool is smaller
    while (selected.length < 8 && pool.length > 0) {
      selected.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    
    setWheelFoods(selected);
    setWheelResult(null);
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { x: 0.2, y: 0.8 },
      colors: ['#00f2fe', '#fe0879', '#ffb300', '#9c27b0']
    });
    // Right burst
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { x: 0.8, y: 0.8 },
      colors: ['#00f2fe', '#fe0879', '#ffb300', '#9c27b0']
    });
  };

  const copyToClipboard = (text, customMsg) => {
    navigator.clipboard.writeText(text).then(() => {
      addToast(customMsg || `已複製 "${text}" 到剪貼簿！`, 'success');
      triggerConfetti();
    }).catch(err => {
      console.error('Failed to copy:', err);
      addToast('複製失敗，請手動複製。', 'error');
    });
  };

  const handleSpin = () => {
    if (spinning || wheelFoods.length < 8) return;

    setSpinning(true);
    setWheelResult(null);

    // Pick a winning index
    const winnerIndex = Math.floor(Math.random() * 8);
    const winner = wheelFoods[winnerIndex];

    // Calculate rotation: 
    // Each segment is 45 degrees (360/8)
    // Segment i is centered at (i * 45 + 22.5) degrees.
    // To align it with the top pointer (0 / 360 degrees), 
    // we rotate by: 360 - (i * 45 + 22.5)
    // Plus we add multiple full spins (e.g. 5 spins = 1800 degrees)
    const nextSpinCount = spinCount + 1;
    setSpinCount(nextSpinCount);
    
    // We cumulative-spin so it always spins forward
    const baseRotation = nextSpinCount * 1800; // 5 full spins each time
    const targetAngle = 360 - (winnerIndex * 45 + 22.5);
    const totalRotation = baseRotation + targetAngle;
    
    setWheelRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      setWheelResult(winner);
      copyToClipboard(winner.name, `🎉 決定就是: "${winner.name}"！已為您複製名稱！`);
    }, 4100); // slightly longer than the 4s transition
  };

  // Change wheel category pool
  const handleWheelCategoryChange = (catId) => {
    initializeWheelFoods(catId);
  };

  // Filter foods for main list
  const filteredFoods = foodData.filter(food => {
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container animate-fade-in">
      {/* Night Market Style Header */}
      <header className="neon-title-container banner-glow">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Sparkles className="text-neon-cyan" size={24} />
          <span style={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: '3px', color: 'var(--color-cyan)', textTransform: 'uppercase' }}>
            Taiwan Night Market Vibe
          </span>
          <Sparkles className="text-neon-pink" size={24} />
        </div>
        <h1 className="neon-title">台灣美食選擇器</h1>
        <p className="neon-subtitle">
          不知道今晚要吃什麼嗎？點擊美食卡片即可<b>複製中文名稱</b>去點餐或是Google地圖搜尋.也可以轉動幸運輪盤，讓命運為您推薦最道地的台灣味！
        </p>
      </header>

      {/* Interactive Wheel of Fortune */}
      <section className="wheel-section glass">
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.25rem' }}>
            🔮 命運美食大輪盤
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
            先選類別，再點擊中央的 「SPIN」 開始轉動！
          </p>
          
          {/* Wheel Category Selectors */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {foodCategories.map(cat => (
              <button
                key={`wheel-${cat.id}`}
                onClick={() => handleWheelCategoryChange(cat.id)}
                disabled={spinning}
                className={`tab-button ${wheelFoods[0]?.category === cat.id || (cat.id === 'all' && !foodCategories.some(c => c.id !== 'all' && c.id === wheelFoods[0]?.category)) ? 'active' : ''}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Wheel Structure */}
        <div className="wheel-container">
          <div className="wheel-indicator"></div>
          
          <div 
            className={`wheel-outer ${spinning ? 'spinning' : ''}`} 
            style={{ transform: `rotate(${wheelRotation}deg)` }}
            ref={wheelRef}
          >
            {wheelFoods.map((food, index) => {
              const angle = index * 45;
              return (
                <div key={`segment-${index}-${food.id}`}>
                  {/* Segment Divider Line */}
                  <div 
                    className="wheel-segment-line" 
                    style={{ transform: `rotate(${angle}deg)` }}
                  ></div>
                  
                  {/* Segment Text Container */}
                  <div 
                    className="wheel-segment-content"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <span className="wheel-segment-label">
                      {food.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SPIN BUTTON CENTER */}
          <button 
            className="wheel-center" 
            onClick={handleSpin}
            disabled={spinning}
          >
            <span className="wheel-center-text">
              {spinning ? '🌀' : 'SPIN'}
            </span>
          </button>
        </div>

        {/* Wheel Results Banner */}
        <div className="wheel-result">
          {spinning && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw className="animate-spin-slow text-neon-cyan" style={{ animation: 'spin-slow 2s linear infinite' }} />
              <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>好料正在載入中，命運之輪飛轉中...</p>
            </div>
          )}
          
          {!spinning && wheelResult && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeInUp 0.4s ease' }}>
              <span className="wheel-result-title">🎯 恭喜抽中</span>
              <h3 className="wheel-result-name">{wheelResult.name}</h3>
              <p className="wheel-result-desc">
                {wheelResult.english} ({wheelResult.pinyin}) — {wheelResult.description}
              </p>
              <button 
                className="action-btn btn-secondary"
                onClick={() => copyToClipboard(wheelResult.name, `已複製 "${wheelResult.name}"！`)}
                style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
              >
                <Copy size={14} /> 複製中文名稱
              </button>
            </div>
          )}

          {!spinning && !wheelResult && (
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
              點擊 SPIN 按鈕，看看今晚要吃什麼！
            </p>
          )}
        </div>
      </section>

      {/* Main Selector Section */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🍜 台灣在地美食大彙整
        </h2>

        {/* Search & Categories Bar */}
        <div className="search-filter-panel glass">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="搜尋美食名稱 (中文、英文、拼音、描述)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-wrapper">
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginRight: '0.5rem', fontWeight: '600' }}>
              分類篩選：
            </span>
            {foodCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`tab-button ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats and Reset */}
        <div className="stats-bar">
          <div className="results-count">
            目前顯示：<span>{filteredFoods.length}</span> 項台灣美味
          </div>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="tab-button"
              style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}
            >
              清除搜尋
            </button>
          )}
        </div>

        {/* Food Grid */}
        {filteredFoods.length > 0 ? (
          <div className="food-grid">
            {filteredFoods.map(food => (
              <div
                key={food.id}
                onClick={() => copyToClipboard(food.name, food.copiedMessage)}
                className="food-card glass"
              >
                {/* Image Container */}
                <div className="card-img-container">
                  <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="card-img"
                    loading="lazy"
                  />
                  <div className="card-img-overlay">
                    <span className="food-name-chinese">{food.name}</span>
                  </div>
                  {/* Category Tag */}
                  <span className={`category-tag tag-${food.category}`}>
                    {foodCategories.find(c => c.id === food.category)?.name.slice(2)}
                  </span>
                </div>

                {/* Content */}
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="food-name-english">{food.english}</span>
                    {food.id === 'taiwan-beer-18' && (
                      <span className="beer-card-badge">18+</span>
                    )}
                  </div>
                  <span className="food-name-pinyin">{food.pinyin}</span>
                  <p className="food-desc">{food.description}</p>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <span>點擊卡片複製中文名</span>
                    <span className="copy-indicator">
                      <Copy size={12} /> 複製
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <AlertCircle size={40} className="text-neon-pink" style={{ marginBottom: '1rem', display: 'inline-block' }} />
            <h3>找不到符合的美食</h3>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              試試看其他的關鍵字，或者點選「全部美食」標籤。
            </p>
          </div>
        )}
      </section>

      {/* Floating Toast Notification Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className="toast"
            style={{ 
              borderColor: toast.type === 'error' ? 'var(--color-pink)' : 'var(--color-cyan)',
              boxShadow: toast.type === 'error' ? '0 8px 30px rgba(254, 8, 121, 0.25)' : '0 8px 30px rgba(0, 242, 254, 0.25)'
            }}
          >
            {toast.type === 'error' ? (
              <AlertCircle size={18} className="text-neon-pink" />
            ) : (
              <Check size={18} className="text-neon-cyan" />
            )}
            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Page Footer */}
      <footer>
        <p style={{ marginBottom: '0.5rem' }}>
          🇹🇼 台灣美食選擇器 &copy; {new Date().getFullYear()} — 點餐小幫手
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Made with 🍜, 🧋, and 💖. Copy food names instantly and order like a local.
          Unpasteurized beer requires 18+. Drink responsibly.
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Food photos courtesy of Wikimedia Commons contributors — <a href="/CREDITS.md" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>see photo credits</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
