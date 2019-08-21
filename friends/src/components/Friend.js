import React from 'react';

const Friends = props => {

    console.log ('Friend.js props:', props)

    return (
        <div className = 'friends'>
            <h3>{props.e.name}</h3>
            <p>{props.e.age}</p>
        </div>
    )
}

export default Friends;