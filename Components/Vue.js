import React from 'react'
import { StyleSheet } from 'react-native'
import FilmVueList from './FilmVueList'
import { connect } from 'react-redux'

class Vue extends React.Component {
    render() {
        return(
            <FilmVueList
                films={this.props.vueFilm}
                navigation={this.props.navigation}
                VueList={true}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        vueFilm: state.toggleVue.vueFilm
    }
}

export default connect(mapStateToProps)(Vue)