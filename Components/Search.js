import React from 'react'
import { StyleSheet, View, Button, TextInput, ActivityIndicator } from 'react-native'
// import films from '../Helpers/filmsData'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmList from './FilmList'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = {
            films: [],
            isLoading: false
            // searchedText: ""
        }
        this.searchedText = ""
        this._loadFilms = this._loadFilms.bind(this)
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
        this.setState({ isLoading: true })
        getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
                films: [ ...this.state.films, ...data.results ],
                isLoading: false
            })
        })
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _searchTextInputChanged(text){
        // this.setState({searchedText: text})
        this.searchedText = text
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {

        })
        this._loadFilms()
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    render() {
        return(
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Titre du film"/>
                <Button title="Rechercher" style={styles.buttonStyle} onPress={() => this._searchFilms()}/>
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages} 
                    favoriteList={false}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
      },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

// mapStateToProps = (state) => {
//     return {
//         favoritesFilm: state.favoritesFilm
//     }
// }

export default Search