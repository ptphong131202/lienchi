import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-image-lightbox/style.css';



class HomePage extends Component
{
    // change language
    changeLanguage = ( language ) =>
    {
        // fire redux event: action
        this.props.changeLanguageApp( language ); // prop bettween redux and react
    }


    render ()
    {
        return (
            <>
                fkwfkwhffkwehfi
            </>
        )
    }

}

const mapStateToProps = state =>
{
    return {
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( HomePage );
