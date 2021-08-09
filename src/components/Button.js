import React from 'react';

function Button(props) {
    return(
        <div className='btn'>
            <button onClick={props.send}>Отправить</button>
        </div>
    )
}

export default Button;