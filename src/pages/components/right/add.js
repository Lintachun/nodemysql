import { useEffect, useState } from "react";
import React from "react";
const Add = ({ data }) => {
    const [Input, setIput] = useState([])
    const [a, setA] = useState("")
    var mysqlid = ''
    var va1 = document.getElementById("tblistt").value;
    useEffect(() => {
        var test = []
        // 取得欄位名稱
        const ans = 'http://127.0.0.1:8888/show/stu?va1=' + va1
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
                    test[i] = <input id={sList[i]} style={{ width: '95%' }} className="addinput" placeholder={sList[i]} onChange={(e) => setA(e.target.value)}></input>
                }
                setIput(test)
                console.log(mysqlid);
            }).catch(err => {
                console.log(err);
            })

    }, [data])

    function add() {
        var mysql = ''
        var x = document.getElementsByClassName("addinput")
        var xy = 0
        var yx = 0
        var mysqlid =""
        for (var j = 0; j < x.length; j++) {
            if (x[j].value == "")
                xy++
        }
        for(var i=0 ;i < x.length;i++){

        
        if (x[i].value == "") {
        } else {
            const updateid = x[i].id
            yx++
            if (xy + yx != x.length){
                 mysql += "'" + x[i].value + "',"
                mysqlid += updateid.toLocaleUpperCase()+ ","
            }
            else{
                 mysql += "'" + x[i].value + "'"
                mysqlid += updateid.toLocaleUpperCase()
            }
        }       
            console.log(xy, yx);
        }
        console.log(mysql);

        fetch("http://127.0.0.1:8888/add?from=" + va1 + "&&mysqlid=" + mysqlid + "&&mysql=" + mysql + "")
            .then(res => res.text())
            .then(res => {
                console.log(res);
                if (res == 'ok') {
                    window.alert("insert successfull")
                    data(false)
                } else {
                    window.alert(res)
                }
            })


    }
    console.log(a);
    return (
        <div className="add">

            {Input}
            <p></p>
            <button onClick={() => data(false)} style={{ width: '50%' }} className="buttonstyle">取消</button>
            <button onClick={add} style={{ width: '50%' }} className="buttonstyle">新增</button>

        </div>

    )
}
export default Add