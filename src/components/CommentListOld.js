import React, {createClass, PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../mixins/toggleOpen'

export default createClass({
    mixins: [toggleOpen],
    getDefaultProps() {
        return {
            comments: [],
            defaultOpen: false
        }
    },

    render() {
        const {isOpen} = this.state
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    },

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
            </div>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
})
