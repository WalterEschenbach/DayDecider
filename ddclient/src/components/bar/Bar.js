import React from 'react'

function Bar(props) {
    const styles = {
        width: "100%",
        height: ".5rem",
        backgroundColor: props.color,
        marginBottom: '1px',
        borderRadius: "10px"
    }
    return (
        <div style={styles}/>
    )
}

export default Bar
