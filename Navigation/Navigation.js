import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'
import Vue from '../Components/Vue'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const NewsStackNavigator = createStackNavigator({
    News: {
        screen: News,
        navigationOptions: {
            title: 'News'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const VueStackNavigator = createStackNavigator({
    Vue: {
        screen: Vue,
        navigationOptions: {
            title: "Vu Film"
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    News: {
        screen: NewsStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                        source={require('../images/ic_fiber_new.png')}
                        style={styles.icon}/>
            }
        }
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                source={require('../images/ic_search.png')}
                style={styles.icon}/>
            }
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                source={require('../images/ic_favorite.png')}
                style={styles.icon}/>
            }
        }
    },
    Vue: {
        screen: VueStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                source={require('../images/ic_check.png')}
                style={styles.icon}/>
            }
        }
    }
},{
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(MoviesTabNavigator)
