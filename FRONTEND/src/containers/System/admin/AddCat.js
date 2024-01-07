import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; // fomat language


import "./AddCat.scss"
class AddCat extends Component
{
    // change language
    changeLanguage = ( language ) =>
    {
        // fire redux event: action
        this.props.changeLanguageApp( language ); // prop bettween redux and react
    }


    constructor ( props )
    {
        super( props );
        this.state = {
            category: "",
        }
    }

    onChangeInput = ( event, id ) =>
    {
        let copystate = { ...this.state }
        copystate[ id ] = event.target.value;
        this.setState( {
            ...copystate
        } )
        console.log( "check state: ", this.state )
    }

    render ()
    {

        return (
            <>
                <div className='container add-cat'>
                    <div className='title text-primary'>
                        <FormattedMessage id="menu.admin.add-category" />
                    </div>

                    <div className="form">
                        <from >
                            <div className='form-group'>
                                <label><FormattedMessage id="menu.admin.name-category" /> : </label>
                                <input type='text'
                                    className='form-controll'
                                    name='category'
                                    onChange={ ( event ) => { this.onChangeInput( event, "category" ) } }
                                />
                            </div>

                            <div className='text-center'>
                                <button type='submit'
                                    className='btn btn-primary mt-3'

                                ><FormattedMessage id="menu.admin.add" /></button>
                            </div>
                        </from>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state =>
{
    return {
        language: state.app.language,


    };
};

const mapDispatchToProps = dispatch =>
{
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( AddCat );
