import { ADD_COMMENT } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    // loading: false, // ??? а не убрать ли еррор и вообще отказаться от DefaultReducerState и оставить один только Мап?
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
    }

    return comments
}