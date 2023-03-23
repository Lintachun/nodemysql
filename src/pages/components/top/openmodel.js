import { useState } from "react"
import Mode from "./model"
const Openmodel = ({ data }) => {
    const [ButtonPop, setButtonPop] = useState(false);
    data(ButtonPop)
    
    return (
        <div className="testtop">
                <input type={'image'} onClick={() => setButtonPop(true)} className='button' src={require("./database-icon.png")}></input>
                {ButtonPop && <Mode trigger={ButtonPop} setButtonPop={setButtonPop} />}
        </div>
    )
}

export default Openmodel