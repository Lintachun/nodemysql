import { useState } from "react"
import Openmodel from "./openmodel"
const Top = ({data}) =>{
    const [buttontf ,SetButtonrf] =useState()
    data(buttontf)
    return(
        
        <div className="top">
            <Openmodel data ={SetButtonrf}/>
        </div>
    )
}
export default Top