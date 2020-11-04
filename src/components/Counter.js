import React , {useState} from 'react'

function Counter() {
    const [count,setcont] = useState(0);
    const handleIncriment = () => {
        setcont(count + 1);
    }
    return (
        <div>
            <h1>Counter</h1>
    <h2>COUNTER NO: {count}</h2>
    <button onClick={handleIncriment}>Add No</button>
        </div>
    )
}

export default Counter
