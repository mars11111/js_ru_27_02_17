import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const {articles, toggleOpen, openId} = props

    const articleComponents = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openId}
                 toggleOpen={toggleOpen(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleComponents}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openId: PropTypes.number,
    toggleOpen: PropTypes.func.isRequired
}

export default accordion(ArticleList)

/*
export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     toggleOpen={this.toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
*/