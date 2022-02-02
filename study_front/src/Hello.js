import React from 'react';

function Hello(props) { // props는 객체로 넘어옴
    return (
        <div style={{color : props.color}}>
            안녕하세요 {props.name}
        </div>
    )
}

export default Hello;