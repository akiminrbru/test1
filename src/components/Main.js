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
console.log(data.data[0].question);

function Main() {


    return(
        <div className="main">
            <Maket data={data.data[0].question}/>
            <Maket data={data.data[1].question}/>
            <Maket data={data.data[2].question}/>
            <Maket data={data.data[3].question}/>
            <Maket data={data.data[4].question}/>
            <Maket data={data.data[5].question}/>
            <Button/>
        </div>
    )
}


export default Main;