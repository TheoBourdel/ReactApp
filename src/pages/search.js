import React from 'react';

import '../css/components/Input-1.css';

import ImageSearch from '../components/ImageSearch'
import MoreImageSearch from '../components/MoreImageSearch';
import Nav from '../components/Nav';




class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {value: ""}
    }

    // Force la value, et call la fonction Visible()
    ChangeValue() {
        this.setState({value: "dogs"})
        this.Visible()
    }

    // affiche le composant ImageSearch
    Visible(id) {
        if (document.getElementById("hide").style.display === 'none') {
            document.getElementById("hide").style.display = 'block'
        } else {
            document.getElementById("hide").style.display = 'none'
        }
    }

    // affiche le composant MoreImageSearch
    MorePicture(id) {
        if (document.getElementById("hidePicture").style.display === 'none') {
            document.getElementById("hidePicture").style.display = 'block'
        }
    }

    render() {
        return (
            <section id="search">
                <div className="statusbar"></div>
                <div className="title"><h1>Search</h1></div>
                <div className="input-1">
                <form className="contact-form">
                        <input className="text" type="text" id="email" placeholder="search all photos" value={this.state.value} autoComplete="off" onKeyPress={() => this.ChangeValue()}/>
                </form>
                <div id="hide" style={{display: 'none'}}>
                    <div className="title"><p>ALL RESULT</p></div>
                    <ImageSearch></ImageSearch>
                    <div id="hidePicture" style={{display: 'none'}}>
                        <MoreImageSearch></MoreImageSearch>
                    </div> 
                    <div className="see-more" onClick={() => this.MorePicture()}>
                            <span>SEE MORE</span>         
                    </div>
                    <Nav></Nav>
                </div>
            </div>
            </section>
        );
    }
};

export default Search;