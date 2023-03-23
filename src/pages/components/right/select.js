
import Openadd from "./openadd";
import Openupdate from "./openupdate";
const Select = () => {
    async function stulistes() {
        try {
            const va1 = document.getElementById("tblistt").value;
            const select = document.getElementById('stulist');
            const ans = 'http://127.0.0.1:8888/show/stu?va1=' + va1
            const api = await fetch(ans)
            const res = await api.json()
            const sList = Object.values(res).map(item => item.Field);
            const createoption = document.createElement('option');
            createoption.value = ""
            createoption.innerHTML = '請選擇欄位名稱';
            select.appendChild(createoption);
            for (var i = 0; i < res.length; i++) {
                const opt = document.createElement('option');
                opt.value = sList[i];
                opt.innerHTML = sList[i];
                select.appendChild(opt);
            }
            select.options.length = i + 1;
        } catch (err) {
            console.log(err);
        }
    }
    async function selUsel() {
        try {

            const usel = document.getElementById("tblistt").value;
            const ans2 = 'http://127.0.0.1:8888/select/usel?table=' + usel
            const ans = 'http://127.0.0.1:8888/show/stu?va1=' + usel
            let str = '';
            str = "<table>";
            // 第一個api
            const api = await fetch(ans)
            const res = await api.json()
            const aList = Object.values(res).map(item => item.Field);
            for (var i = 0; i < res.length; i++) {
                str += "<td>" + aList[i] + "</td>";
            }
            // 第二個api
            const api2 = await fetch(ans2)
            const res2 = await api2.json()
            const sList = res2.map(item => Object.values(item));
            for (var i = 0; i < sList.length; i++) {
                str += "<tr>";
                for (var j = 0; j < sList[0].length; j++) {
                    str += "<td >" + sList[i][j] + "</td>"
                }
                str += "</tr>";
            }
            str += "</table>";
            console.log(res);
            console.log(sList);
            document.getElementById("listtab").innerHTML = str;
        } catch (err) {
            console.log(err);
        }

    }
    async function inquire() {
        const usel = document.getElementById("tblistt").value;
        const va1 = document.getElementById("stulist").value;
        const va2 = document.getElementById("aaabb").value;
        const va3 = document.getElementById("inquire11").value;
        const va4 = document.getElementById("tblistt").value;
        var ans = 'http://127.0.0.1:8888/show/stu?va1=' + usel
        var str = '';
        str = "<table>";

        const api = await fetch(ans)
        const res = await api.json()
        const aList = Object.values(res).map(item => item.Field);
        for (var i = 0; i < res.length; i++) {
            str += "<td>" + aList[i] + "</td>";
        }
        if (va2 == "contains") {
            try {
                const ans2 = 'http://127.0.0.1:8888/select_contains?tablist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api2 = await fetch(ans2)
                const res2 = await api2.json()
                const sList = res2.map(item => Object.values(item));
                for (var i = 0; i < sList.length; i++) {
                    str += "<tr>";
                    for (var j = 0; j < sList[0].length; j++) {
                        str += "<td>" + sList[i][j] + "</td>";
                    }
                    str += "</tr>";
                }
                str += "</table>";
                console.log(res2);
                console.log(sList);
                document.getElementById("listtab").innerHTML = str;
            } catch (err) {
                console.log(err);

            }


        } else if (va2 == "big") {
            try {
                const ans2 = 'http://127.0.0.1:8888/select_big?tablist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api2 = await fetch(ans2)
                const res2 = await api2.json()
                const sList = res2.map(item => Object.values(item));
                for (var i = 0; i < sList.length; i++) {
                    str += "<tr>";
                    for (var j = 0; j < sList[0].length; j++) {
                        str += "<td>" + sList[i][j] + "</td>";
                    }
                    str += "</tr>";
                }
                str += "</table>";
                console.log(res2);
                console.log(sList);
                document.getElementById("listtab").innerHTML = str;
            } catch (err) {
                console.log(err);

            }
        } else if (va2 == "sam") {
            try {
                var ans2 = 'http://127.0.0.1:8888/select_sam?tablist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api2 = await fetch(ans2)
                const res2 = await api2.json()
                const sList = res2.map(item => Object.values(item));
                for (var i = 0; i < sList.length; i++) {
                    str += "<tr>";
                    for (var j = 0; j < sList[0].length; j++) {
                        str += "<td>" + sList[i][j] + "</td>";
                    }
                    str += "</tr>";
                }
                str += "</table>";
                console.log(res2);
                console.log(sList);
                document.getElementById("listtab").innerHTML = str;
            } catch (err) {
                console.log(err);

            }
        } else if (va2 == "equal") {
            try {
                var ans2 = 'http://127.0.0.1:8888/select_equal?tablist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api2 = await fetch(ans2)
                const res2 = await api2.json()
                const sList = res2.map(item => Object.values(item));
                for (var i = 0; i < sList.length; i++) {
                    str += "<tr>";
                    for (var j = 0; j < sList[0].length; j++) {
                        str += "<td>" + sList[i][j] + "</td>";
                    }
                    str += "</tr>";
                }
                str += "</table>";
                console.log(res2);
                console.log(sList);
                document.getElementById("listtab").innerHTML = str;
            } catch (err) {
                console.log(err);

            }
        }else if (va2 == "is_null") {
            try {
                const ans2 = 'http://127.0.0.1:8888/select_is_null?tablist=' + va4 + '&stulist=' + va1 
                const api2 = await fetch(ans2)
                const res2 = await api2.json()
                const sList = res2.map(item => Object.values(item));
                for (var i = 0; i < sList.length; i++) {
                    str += "<tr>";
                    for (var j = 0; j < sList[0].length; j++) {
                        str += "<td>" + sList[i][j] + "</td>";
                    }
                    str += "</tr>";
                }
                str += "</table>";
                console.log(res2);
                console.log(sList);
                document.getElementById("listtab").innerHTML = str;
            } catch (err) {
                console.log(err);

            }
        }
    }
    async function delof() {
        const va1 = document.getElementById("stulist").value;
        const va2 = document.getElementById("aaabb").value;
        const va3 = document.getElementById("inquire11").value;
        const va4 = document.getElementById("tblistt").value;
        if (va2 == "contains") {
            try {
                const ans = 'http://127.0.0.1:8888/del_contains?tblist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api = await fetch(ans)
                const res = await api.text()
                console.log(res);
                window.alert(res);
            } catch (err) {
                console.log(err);
            }

        } else if (va2 == "big") {
            try {
                const ans = 'http://127.0.0.1:8888/del_big?tblist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api = await fetch(ans)
                const res = await api.text()
                console.log(res);
                window.alert(res);
            } catch (err) {
                console.log(err);
            }
        } else if (va2 == "sam") {
            try {
                const ans = 'http://127.0.0.1:8888/del_sam?tblist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api = await fetch(ans)
                const res = await api.text()
                console.log(res);
                window.alert(res);
            } catch (err) {
                console.log(err);
            }
        } else if (va2 == "equal") {
            try {
                const ans = 'http://127.0.0.1:8888/del_equal?tblist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api = await fetch(ans)
                const res = await api.text()
                console.log(res);
                window.alert(res);
            } catch (err) {
                console.log(err);
            }
        }else if (va2 == "is_null") {
            try {
                const ans = 'http://127.0.0.1:8888/del_is_null?tblist=' + va4 + '&stulist=' + va1 + '&text=' + va3
                const api = await fetch(ans)
                const res = await api.text()
                console.log(res);
                window.alert(res);
            } catch (err) {
                console.log(err);
            }
        }
    }
    async function delall() {
        try {
            const va1 = document.getElementById("tblistt").value;
            const ans = 'http://127.0.0.1:8888/del/all?tables=' + va1;
            const api = await fetch(ans)
            const res = await api.text()
            console.log(res);
            window.alert(res);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="right">
            <div >
                <div style={{ textAlign: 'center' }}>
                    sel選擇資料
                </div>
                <p></p>
                <input id="tblistt" className="select" readonly="readonly" style={{ width: '98%' }} ></input>
                <p></p>
                <select id="stulist" onClick={stulistes} onchange="" style={{ width: '100%' }} className="select"></select>
                <p></p>
                <select id="aaabb" name="" onclick="" onchange="" style={{ width: '100%' }} className="select">
                    <option value="">請選擇條件</option>
                    <option value="contains">contains</option>
                    <option value="big">大於</option>
                    <option value="sam">小於</option>
                    <option value="equal">等於</option>
                    <option value="is_null">null</option>
                </select>
                <p></p>
                <input id="inquire11" type='text' style={{ width: '98%' }} placeholder="請輸入搜尋值" className="select"></input>
                <p></p>
                <button onClick={inquire} style={{ width: '50%' }} className="buttonstyle">查詢</button>
                <button onClick={delof} style={{ width: '50%' }} className="buttonstyle">刪除</button>
                <p></p>
                <Openupdate />
                <p></p>
                <Openadd />
                <p></p>
                <button onClick={selUsel} style={{ width: '50%' }} className="buttonstyle">撈出所有資料</button>
                <button onClick={delall} style={{ width: '50%' }} className="buttonstyle">刪除所有資料</button>

            </div>
        </div>
    )
}
export default Select