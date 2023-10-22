import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleOnClick = () => {
        setCount(count+1)
    }

    return (
        <button onClick={handleOnClick}  >
            clicked {count} times!
        </button>
    )
}

export default Counter
