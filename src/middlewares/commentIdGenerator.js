import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
        case ADD_COMMENT:
            //и лучше не мутировать payload, мало-ли что там станут передавать
            payload.comment.id = new Date().getTime()
    }

    next(action)
}
