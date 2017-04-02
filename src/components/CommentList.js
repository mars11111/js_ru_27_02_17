import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {checkAndLoadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    static contextTypes = {
        user: PropTypes.string,
        lang: PropTypes.object
    }

    componentWillReceiveProps({isOpen, article, checkAndLoadArticleComments}) {
        if (isOpen && !this.props.isOpen) checkAndLoadArticleComments(article.id)
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {

        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)

        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? this.context.lang.hideComments : this.context.lang.showComments}</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, loaded, isOpen} = this.props
        const {user, lang} = this.context
        if (!isOpen) return null
        if (!loaded) return <Loader/>

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    {lang.noCommentsYet}
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
        return (
            <div>
                {`${lang.user}: ${user}`}
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

export default connect((state, props) => ({
    loaded: state.articles.getIn(['entities', props.article.id, 'commentsLoaded'])
}), {checkAndLoadArticleComments}, null, {pure: false})(toggleOpen(CommentList))