import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
                <Footer />
            </div>
        )
    }
}
