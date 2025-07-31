import { useState} from 'react';
import '../App.css';





export default function CategoryButton({items, title}){

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);

  function Button({children, className, onClick, value}){
    return(
    <button 
      className={className} 
      onClick={onClick} 
      value={value}
    >
       {children} 
    </button >
    );
}

  return (
    <div style={{ marginBottom: "10px" }}>
      <h2>{title}</h2>
      <Button 
      className = "category-container"
      onClick={e => setIsOpen(!isOpen)}
      >
       {selected} {isOpen ? "▲": "▼" } 
      </Button >
      {/* isOpen이 true일 때만 밑으로 내용 표시 */}
      {isOpen && (
        <div style={{ padding: "10px 20px", backgroundColor: "#fafafa" }}>
          <ul>
            {items.map((item) => (
              <div>
              <Button 
              className = "category-option" 
              key={item} 
              value = {item} 
              onClick={e => {
                setSelected(e.target.value);
                setIsOpen(!isOpen);
              }}>{item}</Button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
    
  