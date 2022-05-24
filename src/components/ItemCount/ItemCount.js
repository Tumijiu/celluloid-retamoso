import React, { useState } from 'react';
import './ItemCount.css'
import Button from '../Button/Button';

function ItemCount (props) {

    const [count, setCount] = useState(props.initial)

    const decrement = () => {
        if (count > 0)
            setCount ( count - 1)
    }

    const increment = () => {
        if (count < props.stock)
            setCount ( count + 1)
    }

    return (
        <div className="ItemCount">
            <div className='Controls'>
                <Button onAdd={ decrement }>-</Button>
                <p className='Display'>{count}</p>
                <Button onAdd={ increment }>+</Button>
            </div>
            <button className='Agregar'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;