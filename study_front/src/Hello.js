import React from 'react';

function Hello({ name, color,isSpecial }) { // props는 객체로 넘어옴 / props 객체 사용 안하면 변수를 설정
    return (
        <div style={{ color }}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;