import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      textToChange : this.props.film.title,
      displayDetailForFilm: this.props.displayDetailForFilm,
      film: this.props.film
    }
    this._onPressOut = this._onPressOut.bind(this)
    this._onLongPressButton = this._onLongPressButton.bind(this)
  }

  _onLongPressButton() {
    if(this.state.textToChange === this.state.film.title){
      this.setState({
        textToChange: 'Sorti le ' + this.state.film.release_date
      })
    } else{
      this.setState({
        textToChange: this.state.film.title
      })
    }
  }

  _onPressOut() {
    this.setState({
      textToChange: this.state.film.title
    })
  }

  render() {
    return (
        <FadIn>
            <TouchableOpacity onPress={() => this.state.displayDetailForFilm(this.state.film.id) } onLongPress={this._onLongPressButton} onPressOut={this._onPressOut} style={styles.main_container}>
            <Image
                style={styles.image}
                source={{uri: getImageFromApi(this.state.film.poster_path)}}
            />
            <View style={styles.content_container}>
                <Text style={styles.title_text}>{this.state.textToChange}</Text>
            </View>
          </TouchableOpacity>
        </FadIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 110,
    flexDirection: 'row'
  },
  image: {
    width: 105,
    height: 105,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 100
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    paddingTop: 30
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default FilmItem