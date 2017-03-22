import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

        case ADD_COMMENT:
            // ??? копировать весь state со всем вложенным, чтобы ничего не мутировать, это нормально?
            const newArticles = state.slice()
            const newArticle = newArticles.find(a => a.id === payload.articleId);

            const newComments = newArticle.comments.slice()
            newComments.push(payload.comment.id)

            newArticle.comments = newComments
            return newArticles
    }

    return state
}