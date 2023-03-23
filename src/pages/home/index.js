import Top from "../components/top/top"
import "./index.css"
import Downapp from "../components/down/down"
import { useState } from "react"
const Home = () => {
    const [buttontf ,SetButtonrf] =useState()
    return (
        <div>
            <div className="container">
                <Top data={SetButtonrf} />
                <Downapp data={buttontf}/>
            </div>
        </div>

    )
}
export default Home