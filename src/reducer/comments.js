import {ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, SUCCESS, START, FAIL} from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    loading: false, // ??? а не убрать ли еррор и вообще отказаться от DefaultReducerState и оставить один только Мап?
    error: null
})

export default (comments = DefaultReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))

        case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
            return comments
                .mergeIn(['entities'], arrToMap(payload.response, CommentModel))
                .set('loading', false);

        case LOAD_COMMENTS_BY_ARTICLE_ID + START:
            return comments.set('loading', true);

        case LOAD_COMMENTS_BY_ARTICLE_ID + FAIL:
            console.log('fail ', payload.error)
            return comments.set('error', payload.error);
    }

    return comments
}