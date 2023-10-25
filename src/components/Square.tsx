import { useState } from "react"


export default function Square() {

    const [value, setValue] = useState<string|null>(null);

    return (
        <button className='square'
            onClick = {handleOnClick}
        >
        {value}
        </button>
    ) 
    
    function handleOnClick() {
        setValue('1');
        console.log("clicked");
        
    }

}