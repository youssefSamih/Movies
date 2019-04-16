import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmVueItem from './FilmVueItem'
import { connect } from 'react-redux'


class FilmVueList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
        // console.log(this.props.navigation)
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.films}
                extraData={this.props.vueFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <FilmVueItem 
                        film={item}
                        isFilmVue={(this.props.vueFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                        displayDetailForFilm={this._displayDetailForFilm}
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        vueFilm: state.toggleVue.vueFilm
    }
}

export default connect(mapStateToProps)(FilmVueList)
