import category from '../services/categoryService';

// create a new category
let handlePostCategory = async ( req, res ) =>
{
    let cat = await category.handlePostCategory( req.body );
    return res.status( 200 ).json( cat );
}

// get category
let getCategory = async ( req, res ) =>
{
    let cat = await category.getCategory();
    return res.status( 200 ).json( cat );
}

// delete category
let deleteCategory = async ( req, res ) =>
{
    let cat = await category.deleteCategory( req.body.id );
    return res.status( 200 ).json( cat );
}


let editCategory = async ( req, res ) =>
{
    console.log( req.body.id )
}
module.exports = {
    handlePostCategory: handlePostCategory,
    getCategory: getCategory,
    deleteCategory: deleteCategory,
    editCategory: editCategory
}