import React from 'react';

export function InputRedError(props) {
    const style = {
        color: "red",
        fontWeight: "bold",
        fontSize: '12px',
        marginTop: 0,
        textTransform: "capitalize"
    }

    return (
        <p style={style}>{props.error}</p>
    );
} 