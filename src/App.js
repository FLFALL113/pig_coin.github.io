import React, { useState, useEffect } from 'react';
import './App.css';

// Импортируем изображение монеты (нужно положить в папку public/images)
const coinImage = process.env.PUBLIC_URL + '/images/coin.png';

function App() {
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [incomePerHour, setIncomePerHour] = useState(10);
  const [activeTab, setActiveTab] = useState('main');

  const handleCoinClick = () => {
    if(energy > 0) {
      setCoins(prev => prev + 1);
      setEnergy(prev => prev - 1);
    }
  };

  // Автоматический доход каждую минуту
  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prev => prev + incomePerHour / 60);
    }, 60000);
    return () => clearInterval(interval);
  }, [incomePerHour]);

  return (
    <div className="app">
      {/* Верхняя панель */}
      <div className="top-panel">
        <div className="stats-box left">
          <div className="stat-item">
            <span className="stat-label">Монеты</span>
            <span className="stat-value">{Math.floor(coins)}</span>
          </div>
        </div>

        <div className="stats-box center">
          <div className="stat-item">
            <span className="stat-label">Доход/час</span>
            <span className="stat-value">{incomePerHour}</span>
          </div>
        </div>

        <div className="stats-box right">
          <div className="stat-item">
            <span className="stat-label">Энергия</span>
            <span className="stat-value">{energy}</span>
          </div>
        </div>
      </div>

      {/* Центральная монета */}
      <div className="coin-container">
        <img 
          src={coinImage} 
          alt="Clickable Coin" 
          className={`coin ${energy === 0 ? 'disabled' : ''}`} 
          onClick={handleCoinClick}
        />
        <div className="click-effect">+1</div>
      </div>

      {/* Нижняя панель навигации */}
      <div className="bottom-nav">
        <button 
          className={`nav-btn ${activeTab === 'main' ? 'active' : ''}`}
          onClick={() => setActiveTab('main')}
        >
          Главная
        </button>
        <button 
          className={`nav-btn ${activeTab === 'shop' ? 'active' : ''}`}
          onClick={() => setActiveTab('shop')}
        >
          Прокачки
        </button>
        <button 
          className={`nav-btn ${activeTab === 'cards' ? 'active' : ''}`}
          onClick={() => setActiveTab('cards')}
        >
          Карты
        </button>
        <button 
          className={`nav-btn ${activeTab === 'quests' ? 'active' : ''}`}
          onClick={() => setActiveTab('quests')}
        >
          Задания
        </button>
        <button 
          className={`nav-btn ${activeTab === 'secret' ? 'active' : ''}`}
          onClick={() => setActiveTab('secret')}
        >
          ???
        </button>
      </div>
    </div>
  );
}

export default App;