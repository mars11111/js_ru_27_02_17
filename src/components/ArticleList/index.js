import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {

    filterFunc = selected => article => {
        return selected.some(s => article.id === s.value)
    }

    render() {
        const {articles, selected, toggleOpenItem, isItemOpened} = this.props

        const articleComponents = articles
            .filter(this.filterFunc(selected))
            .map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {
    return {
        selected: state.ids,
        articles: state.articles
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}