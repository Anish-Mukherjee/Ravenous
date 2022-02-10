import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import SearchBar from './components/SearchBar/SearchBar'

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Footer />
            </div>
        )
    }
}
