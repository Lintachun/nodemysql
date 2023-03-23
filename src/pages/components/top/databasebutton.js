
import { useEffect, useState } from "react";
const Databasebutton = ({ data }) => {
    var test = []
    const [aa, setAa] = useState([])
    const [tabletf, setTabltf] = useState(false)
    useEffect(() => {
        var ans = 'http://127.0.0.1:8888/show/databases'
        fetch(ans)
            .then((response) => {
                return response.json();
            }).then((response) => {
                console.log(response);
                const sList = Object.values(response).map(item => item.Database);
                for (var i = 0; i < response.length; i++) {
                    var value = sList[i]
                    test[i] = <button id={value} className="buttonstyle2" onClick={(e) => {
                        var LD = e.target.id;
                        var apii = 'http://127.0.0.1:8888/linkin/database?database=' + LD
                        var x = document.getElementsByClassName("eeee");
                        for (var i = 0; i < x.length; i++) {
                            x[i].options.length = 0;
                        }
                        fetch(apii)
                            .then((res) => {
                                return res.text();
                            }).then((res) => {
                                console.log(res);
                                data(false)
                                setTabltf(true)
                            }).catch(e => {
                                console.log(e);
                            })
                    }}>{sList[i]}</button>
                }
                console.log(test);
                setAa(test)
            }).catch(aaa => {
                console.log(aaa)
            })
    }, [data])
    return (
        <div >
            {aa}
        </div>

    )
}
export default Databasebutton