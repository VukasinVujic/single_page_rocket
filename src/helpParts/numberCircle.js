import React from 'react'


function NumberCircle(props) {
    let classN = "numberCircle " + props.className
        return (
            <div className={classN}>
                <p>{props.text}</p>
            </div>
        )
    }

export default NumberCircle