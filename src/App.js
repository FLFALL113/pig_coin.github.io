import React, { useState, useEffect } from 'react';
import './App.css';

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
      
    </div>
  );
}

export default App;