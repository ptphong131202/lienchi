import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; // fomat language
import { createCategory } from "../../../services/userService"
import { Toast, toast } from 'react-toastify';

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
            name: "",
        }
    }

    onChangeInput = ( event, id ) =>
    {
        let copystate = { ...this.state }
        copystate[ id ] = event.target.value;
        this.setState( {
            ...copystate
        } )
    }

    handleSaveCategory = async () =>
    {
        let res = await createCategory( {
            name: this.state.name
        } )

        if ( res && res.errCode === 0 )
        {
            toast.success( "Category saved successfully!" );
            this.setState( {
                name: ""
            } )
        }
        else
        {
            toast.error( "Category saved failer!" );

        }
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
                                    name='name'
                                    onChange={ ( event ) => { this.onChangeInput( event, "name" ) } }
                                    onClick={ () => this.handleSaveCategory() }
                                />
                            </div>

                            <div className='text-center'>
                                <button type='submit'
                                    className='btn btn-primary mt-3'
                                    onClick={ () => this.handleSaveCategory() }
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
