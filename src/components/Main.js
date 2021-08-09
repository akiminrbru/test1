import React from "react";
import Button from "./Button";
import Maket from './Maket'

let json = `{
    "data": [
        {"question": "Сколько вам лет?", "id": 1},
        {"question": "Как вас зовут?", "id": 2},
        {"question": "В каком городе вы живете?", "id": 3},
        {"question": "Ваш любимый цвет?", "id": 4},
        {"question": "У вас есть собака?", "id": 5},
        {"question": "Любимая музыка?", "id": 6}
    ]
}`;

let data = JSON.parse(json);

function send() {
    for(let i = 0; i < 6; i++) {
        let elem = document.getElementById(i + 1).value;
        localStorage.setItem(data.data[i].question, elem);
        document.getElementById(i + 1).value = "";
    }
}

function Main() {

    return(
        <div className="main">
            <Maket id={data.data[0].id} data={data.data[0].question}/>
            <Maket id={data.data[1].id} data={data.data[1].question}/>
            <Maket id={data.data[2].id} data={data.data[2].question}/>
            <Maket id={data.data[3].id} data={data.data[3].question}/>
            <Maket id={data.data[4].id} data={data.data[4].question}/>
            <Maket id={data.data[5].id} data={data.data[5].question}/>
            <Button send={send}/>
        </div>
    )
}


export default Main;