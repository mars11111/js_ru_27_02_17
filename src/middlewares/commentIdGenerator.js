import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            payload.comment.id = 3582
    }

    next(action)
}