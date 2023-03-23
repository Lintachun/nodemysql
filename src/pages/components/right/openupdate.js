import { useState } from "react"
import Update from "./update"
const Openupdate = () => {
    const [a, setA] = useState(false)

    return (
        <div >
            <button style={{ width: '100%' }} className="buttonstyle" onClick={() => {setA(true)}}>修改資料</button>
            {a && <Update data={setA} />}
        </div>
    )
}
export default Openupdate