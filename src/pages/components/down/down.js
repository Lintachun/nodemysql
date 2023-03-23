
import Select from "../right/select"
import Downlefttop from "./downleft/downlefttop"
import Middle from "./middle"
const Downapp =({data}) =>{
    
    return(
        <div className="down">
            <Downlefttop data={data}/>
            <Middle />
            <Select />
        </div>
    )
}
export default Downapp