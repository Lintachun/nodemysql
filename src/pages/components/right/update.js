import { useEffect, useState } from "react";
import React from "react";
const Update = ({ data }) => {
    const [a, setA] = useState([])
    useEffect(() => {
        const va4 = document.getElementById("tblistt").value;
        console.log(va4);
        var test = []
        var mysqlid = ''
        // 取得欄位名稱
        const ans = 'http://127.0.0.1:8888/show/stu?va1=' + va4
        fetch(ans)
            .then(res => res.json())
            .then(res => {
                const sList = Object.values(res).map(item => item.Field);
                for (var i = 0; i < res.length; i++) {
                    const res_length = res.length
                    if (i < res_length - 1)
                        mysqlid += sList[i].toUpperCase() + ","
                    else
                        mysqlid += sList[i].toUpperCase()
                    test[i] = <input id={sList[i]} style={{ width: '95%' }} className="addinput" placeholder={sList[i]} value={null} ></input>
                }
                setA(test)
                console.log(mysqlid);
            }).catch(err => {
                console.log(err);
            })
    }, [data])
    async function okupdate() {
        var mysql = ''
        var x = document.getElementsByClassName("addinput")
        const va1 = document.getElementById("stulist").value;
        const va2 = document.getElementById("aaabb").value;
        const va3 = document.getElementById("inquire11").value;
        const va4 = document.getElementById("tblistt").value;
        var xy = 0
        var yx = 0
        for (var j = 0; j < x.length; j++) {
            if (x[j].value == "")
                xy++
        }
        for (var i = 0; i < x.length; i++) {
            if (x[i].value == "") {
            } else {
                const updateid = x[i].id
                yx++
                if (xy + yx != x.length)
                    mysql += updateid + "='" + x[i].value + "',"
                else
                    mysql += updateid + "='" + x[i].value + "'"

                console.log(xy, yx);
            }
        }
        console.log("mysql" , mysql);
        console.log(va4, mysql, va1, va3);
        if (va2 == "contains") {
            const ans = "http://127.0.0.1:8888/update_contains?from=" + va4 + "&&mysqlid=" + mysql + "&&stulist=" + va1 + "&&text=" + va3 + ""
            const api = await fetch(ans)
            const res = await api.text()
            if (res == 'ok') {
                window.alert("update successfull")
            } else {
                window.alert(res)
            }
        } else if (va2 == "equal") {
            const ans = "http://127.0.0.1:8888/update_equal?from=" + va4 + "&&mysqlid=" + mysql + "&&stulist=" + va1 + "&&text=" + va3 + ""
            const api = await fetch(ans)
            const res = await api.text()
            if (res == 'ok') {
                window.alert("update successfull")
            } else {
                window.alert(res)
            }
        } else if (va2 == "big") {
            const ans = "http://127.0.0.1:8888/update_big?from=" + va4 + "&&mysqlid=" + mysql + "&&stulist=" + va1 + "&&text=" + va3 + ""
            const api = await fetch(ans)
            const res = await api.text()
            if (res == 'ok') {
                window.alert("update successfull")
            } else {
                window.alert(res)
            }
        }  else if(va2 == "sam"){
            const ans = "http://127.0.0.1:8888/update_sam?from=" + va4 + "&&mysqlid=" + mysql + "&&stulist=" + va1 + "&&text=" + va3 + ""
            const api =  await fetch(ans)
            const res = await api.text()
            if (res == 'ok') {
               window.alert("update successfull")
           } else {
               window.alert(res)
           }
    }else if (va2 == "is_null") {
            const ans = "http://127.0.0.1:8888/update_is_null?from=" + va4 + "&&mysqlid=" + mysql + "&&stulist=" + va1 + "&&text=" + va3 + ""
            const api = await fetch(ans)
            const res = await api.text()
            if (res == 'ok') {
                window.alert("update successfull")
            } else {
                window.alert(res)
            }
    }
}
    return (
        <div className="add">
            {a}
            <button onClick={() => data(false)} style={{ width: '50%' }} className="buttonstyle">取消</button>
            <button onClick={okupdate} style={{ width: '50%' }} className="buttonstyle">更新</button>
        </div>
    )
}
export default Update