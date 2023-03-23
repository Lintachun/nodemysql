import Tablebutton from "./tablesbutton"
const Downlefttop = ({data}) => {
    console.log('data',data);
    return (
        
            <div className="tableleft">
                {/* <table id="listtable" className='listtabbb' border="1"></table> */}
                <Tablebutton data={data}/>
            </div>
    )
}
export default Downlefttop