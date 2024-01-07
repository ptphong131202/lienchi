import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HomePageAdmin.scss"
class HomePageAdmin extends Component
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
                <div className='container home-admin'>
                    <div className='home-admin-text text-primary '>
                        CHÀO MỪNG BẠN ĐẾN VỚI TRANG QUẢN LÝ
                    </div>
                    <div className='home-admin-text text-primary '>
                        LIÊN CHI HỘI SINH VIÊN VĨNH LONG
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

export default connect( mapStateToProps, mapDispatchToProps )( HomePageAdmin );
