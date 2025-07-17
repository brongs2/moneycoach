import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Button label="다음" onClick={() => alert("버튼 클릭됨!")} />
    </div>
  );
}

export default App;
