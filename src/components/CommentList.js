import React, {Component} from 'react'
import Comment from './Comment'


class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const comments = this.props.comments
        const isOpen = this.state.isOpen

        const commentComponents = isOpen ? comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null
        const commentsContainer = isOpen ? <ul>{commentComponents}</ul> : null
        const button = <button onClick={this.handleClick}>{isOpen ? 'hide' : 'show'}</button>

        return (
            <div>
                {button}
                {commentsContainer}
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default CommentList