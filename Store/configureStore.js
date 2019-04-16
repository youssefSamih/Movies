import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducers'
import setAvatar from './Reducers/avatarReducer'
import toggleVue from './Reducers/vueReducer'
import { persistCombineReducers } from 'redux-persist'
import Storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'root',
    storage: Storage
}

export default createStore(persistCombineReducers( rootPersistConfig, {toggleFavorite, setAvatar, toggleVue}))