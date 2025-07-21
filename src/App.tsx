import React, { useState } from 'react';
import './App.css';
import DuckImage from './assets/Duck.webp'; // src/assets 안에 있는 오리 이미지

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    {
      src: DuckImage,
      title: '오리',
      content: '귀여운 오리',
    },
  ];

  const handleClick = (index: number) => {
    // 같은 이미지를 다시 클릭하면 닫히도록 토글
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="image-grid">
        {images.map((item, index) => (
          <div
            key={index}
            className={`image-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={item.src} alt={item.title} />
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
