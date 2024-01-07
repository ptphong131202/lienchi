import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; // fomat language
import { getCategory, deleteCategory } from "../../../services/userService"
import { Toast, toast } from 'react-toastify';

import "./ListCat.scss"
import { get } from 'lodash';
class ListCat extends Component
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
            listCat: [],
        }
    }

    async componentDidMount ()
    {
        let res = await getCategory();
        this.setState( {
            listCat: res.data
        } )
    }

    handleDeleteCategory = async ( item ) =>
    {
        alert( "Bạn có muốn xóa danh mục này hay không?" );

        let res = await deleteCategory( item.id )

        if ( res && res.errCode === 0 )
        {
            let category = await getCategory();
            this.setState( {
                listCat: category.data
            } )
            toast.success( "Xóa danh mục thành công!" )
        }
        else toast.error( "Xóa danh mục không thành công!" )

    }
    render ()
    {
        let { listCat } = this.state;
        let { language } = this.props;

        return (
            <>
                <div className='container add-cat'>
                    <div className='title text-primary'>
                        <FormattedMessage id="menu.admin.list-cat" />
                    </div>

                    <div className='cat-list'>
                        <div className='cat-list-content'>
                            <div className='cat-search'>
                                jhfkweiw
                            </div>
                            <div className='list-category'>
                                { listCat && listCat.map( ( item, index ) =>
                                {
                                    return (
                                        <div className='list-category-item' key={ index }>
                                            <div className='name'>{ item.name }</div>
                                            <div className='action'>
                                                <button className='btn btn-warning btn-edit'>
                                                    { language === 'vi' ? 'Chỉnh sửa' : "Edit" }
                                                </button>
                                                <button className='btn btn-danger btn-delete'
                                                    onClick={ () => this.handleDeleteCategory( item ) }
                                                >
                                                    { language === 'vi' ? 'Xóa' : "Delete" }

                                                </button>
                                            </div>
                                        </div>
                                    )
                                } ) }
                            </div>
                        </div>
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

export default connect( mapStateToProps, mapDispatchToProps )( ListCat );
