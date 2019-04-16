const initialState = { vueFilm: [] }

function toggleVue(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_VUE':
            const vueFilmIndex = state.vueFilm.findIndex(item => item.id === action.value.id)
            if(vueFilmIndex !== -1) {
                nextState = {
                    ...state,
                    vueFilm: state.vueFilm.filter(  (item, index) => index !== vueFilmIndex)
                }
            }
            else{
                nextState = {
                    ...state,
                    vueFilm: [ ...state.vueFilm, action.value ]
                }
            }
            return nextState || state
        default:
            return state;
    }
}

export default toggleVue