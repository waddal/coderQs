import React from 'react'

const Starred = (props) => {
    const { starred } = props;
    return (
        <>
            <p>{starred.id}</p>
        </>
    )
}

export default Starred
