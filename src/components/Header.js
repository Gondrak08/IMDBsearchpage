import React, { Component } from 'react'
import './header.css'


export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="header-title">
                    <div className="title">
                        <a href="/" style={{textDecoration:'none'}} >
                            <h1>Movies</h1>
                        </a>
                    </div>
                </div>
        </div>
        )
    }
}
