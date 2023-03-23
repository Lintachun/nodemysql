import Databasebutton from "./databasebutton";
const Modele = ({ setButtonPop }) => {

    async function show_database_list() {
        try {
            const select = document.getElementById('datlistt')
            const ans = 'http://127.0.0.1:8888/show/databases'
            const api = await fetch(ans)
            const res = await api.json()
            console.log(res);
            const sList = Object.values(res).map(item => item.Database);
            for (var i = 0; i < res.length; i++) {
                const opt = document.createElement('option');
                opt.value = sList[i];
                opt.innerHTML = sList[i];
                select.appendChild(opt);
            }
            select.options.length = i + 1;
            console.log(sList)
        } catch (err) {
            console.log(err);
        }

    }
    async function linkdat() {
        setButtonPop(false)
        try {
            const LD = document.getElementById("datlistt").value;
            const ans = 'http://127.0.0.1:8888/linkin/database?database=' + LD
            const api = await fetch(ans)
            const res = await api.text()
            console.log(res);
        } catch (e) {
            console.log(e);
        }

    }
    return (

        <div className="popup">
            <div className="popup-inner">
                <div>
                    <button className="close-btn" onClick={() => setButtonPop(false)}>x</button>
                </div>
                <div className="center">
                    <h3>Database</h3>
                    <Databasebutton data={setButtonPop} />
                    <div className="modeldiv">
                        <table id="tableeee" class='listtabbb' border="1"></table>
                    </div>
                </div>
                <select id="datlistt" style={{ width: '100%' }} onClick={show_database_list} className="select">
                    <option value="" >請選擇databases</option>
                </select>
                <p>
                    <button className="databasebutton" onClick={linkdat}>連線資料庫</button>
                </p>

            </div>
        </div>
    )
}
export default Modele