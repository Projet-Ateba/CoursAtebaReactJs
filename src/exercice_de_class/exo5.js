import React, {useState} from "react";
function AlertButton() {
    const [message, setMessage] = useState('Hello, world!');
    const handleClick = () => {
    alert(message);
    };
    const handleChange = (event) => {
    setMessage(event.target.value);
    };
    return (
    <div>
    <input type="text" value={message} onChange={handleChange} />
    <button onClick={handleClick}>Cliquez ici</button>
    </div>
    );
    }
    export default AlertButton;