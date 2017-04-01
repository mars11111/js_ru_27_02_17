import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import Loader from './Loader'
import NewCommentForm from './NewCommentForm'
import {loadCommentsByArticleId} from '../AC'

class CommentList extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps({isOpen, article, loading, loadCommentsByArticleId}) {
        if (!this.props.isOpen && isOpen && !loading/* тут надо как-то проверить, что в глобальном справочнике комментов ещё нет комментов из статьи*/) {
            loadCommentsByArticleId(article.id)
        }
    }

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
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
        const {article, isOpen, loading, error} = this.props

        if (!isOpen) return null

        if (loading) {
            return <div><Loader /></div>
        }

        if (error) {
            return <h1>{error}</h1>
        }

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

        const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
                <NewCommentForm articleId={article.id} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.comments.loading,
        error: state.articles.error
    }
}

export default connect(mapStateToProps, { loadCommentsByArticleId })(toggleOpen(CommentList))