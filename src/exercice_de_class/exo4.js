import React, { useState } from 'react';
import './exo3.css'

function Counter() {
const [count, setCount] = useState(0);
const handleIncrement = () => {
setCount(count + 1);
};
const handleDecrement = () => {
setCount(count - 1);
};
return (
<div className='conpt'>
<span>{count}</span>
<div className='conpt1'>
<button onClick={handleDecrement}>Décrement -</button>
<button onClick={handleIncrement}>Incrément +</button></div>
</div>
);
}
export default Counter;