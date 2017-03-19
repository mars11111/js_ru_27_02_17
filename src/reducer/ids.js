import {SET_IDS, DELETE_ARTICLE} from '../constants'

export default (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case SET_IDS:
            return payload.ids

        case DELETE_ARTICLE:
            return state.filter(selectItem => selectItem.value !== payload.id)
    }

    return state
}