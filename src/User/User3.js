// States in Input Field

import { useState } from 'react'
export default function User3() {
    const [name, setName] = useState("ayushi")
    const [flag, setFlag] = useState(false)

    function getData(e) {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <h1>HTML Sanitizati</h1>

            {flag ? <h1> Hello {name} </h1> : null}
            <input type="text" onChange={getData} />
            <button onClick={() => setFlag(true)}>Submit</button>
        </div>
    )
}

