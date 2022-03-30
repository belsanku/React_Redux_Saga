import React, {useState} from 'react';

function CounterComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCount((prevState) => prevState - 1);
    };
    return (
        <div>
            <button onClick={decrement}>dec</button>
            <b>Counter : {count}</b>
            <button onClick={increment}>inc</button>
        </div>
    );
}

export default CounterComponent;