import React from 'react'

export default (props) => {

    const {comment} = props

    return (
        <div>
            <h5>{comment.user}</h5>
            <section>{comment.text}</section>
        </div>
    )
}