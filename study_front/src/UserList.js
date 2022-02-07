import React from 'react';

// 한파일에 여러개의 컴포넌트 선언해도 ㄱㅊ
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    return (
        <div>
            {users.map(user => (
                <User user={user} key = {user.id} />
            ))}
        </div>
    )
}

export default UserList;