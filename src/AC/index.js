import {INCREMENT, DELETE_ARTICLE, SET_IDS} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setIds(ids) {
    return {
        type: SET_IDS,
        payload: { ids }
    }
}