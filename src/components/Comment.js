import React, {PropTypes}  from 'react'
import {connect} from 'react-redux'
import {createFindCommentSelector} from '../selectors'

function Comment(props) {
    console.log(props)
    const { text, user } = props.comment
    return (
        <div>
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

const mapStateToProps = () => {
    const findCommentSelector = createFindCommentSelector()
    return (state, props) => {
        return {
            comment: findCommentSelector(state, props)
        }
    }
}

export default connect(mapStateToProps)(Comment)