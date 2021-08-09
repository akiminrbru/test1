import React from 'react';

function Maket(props) {
    return( 
        <div className="maket">
            <p>{props.data}</p>
            <input placeholder="*Введите текст"></input>
        </div>
    )
}

export default Maket;