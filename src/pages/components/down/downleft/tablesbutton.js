import { useEffect, useState } from "react"
const Tablebutton = ({ data }) => {
    const [tablebutton, setTablebuuton] = useState([])
    var test = []
    useEffect(() => {
        fetch('http://127.0.0.1:8888/show/tables')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const sList = res.map(item => Object.values(item))
                for (var i = 0; i < sList.length; i++) {
                    var value = sList[i]
                    test[i] =<button id={value} className="buttonstyle3" onClick={(e) => {
                        var Id = e.target.id
                        var apii = 'http://127.0.0.1:8888/select/usel?table=' + Id
                        var ans = 'http://127.0.0.1:8888/show/stu?va1=' + Id
                        var str = '';
                        fetch(ans)
                            .then((response) => {
                                return response.json();
                            }).then((response) => {
                                console.log(response);
                                const aList = Object.values(response).map(item => item.Field);
                                for (var i = 0; i < response.length; i++) {
                                    str += "<td>" + aList[i] + "</td>";
                                }
                                console.log(aList);
                                fetch(apii)
                                    .then((res) => {
                                        return res.json();
                                    }).then((res) => {
                                        const sList = res.map(item => Object.values(item));
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
                                        document.getElementById("tblistt").value = Id;
                                        document.getElementById("stulist").length = 0;
                                    })
                            }).catch(aaa => {
                                console.log("errrrrrrrrrrrrrrrr");
                            })
                    }}><img src={require("./table_icon-icons.png")} className="img" /> {sList[i]}</button>
                }
                setTablebuuton(test)
                console.log(sList);
            })
    }, [data])
    return (
        <div>
            {tablebutton}
        </div>
    )
}
export default Tablebutton