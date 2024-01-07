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

module.exports = {
    handlePostCategory: handlePostCategory,
    getCategory: getCategory
}