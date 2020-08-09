import React, {useState} from 'react'

export default function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = useState(null);
    const onItemSelected = (idx) => {
        setActiveItem(idx)    
    };

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onItemSelected(null)} className={activeItem === null ? "active" : ''}>Все</li>
                {items && items.map((item, idx) => (
                    <li 
                        className={activeItem === idx ? "active" : ''}
                        onClick={() => onItemSelected(idx)} 
                        key={idx}>{item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
