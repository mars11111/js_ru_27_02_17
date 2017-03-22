import {normalizedComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const newComments = comments.slice()
            newComments.push(payload.comment)
            return newComments
    }

    return comments
}