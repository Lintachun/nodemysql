import { useState } from "react"
import Add from "./add"
const Addselect = () => {
    const [a, setA] = useState(false)

    return (
        <div >
            <button style={{ width: '100%' }} className="buttonstyle" onClick={() => {
                setA(true)
            }}>新增資料</button>
            {a && <Add data={setA} />}
        </div>
    )
}
export default Addselect