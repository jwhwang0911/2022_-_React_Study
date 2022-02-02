import React from 'react';

function Hello({ name, color }) { // props는 객체로 넘어옴 / props 객체 사용 안하면 변수를 설정
    return (
        <div style={{ color }}>
            안녕하세요 {name}
        </div>
    )
}

export default Hello;