import db from '../models/index';


// create
let handlePostCategory = ( data ) =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            if ( !data.name )
            {
                resolve( {
                    errCode: 2,
                    errMessage: 'Not in valid!'
                } )
            }
            else
            {
                await db.Category.create( {
                    name: data.name
                } )

                resolve( {
                    errCode: 0,
                    errMessage: 'Create new category succeed',
                } )
            }

        }
        catch ( err )
        {
            reject( err );
        }
    } )


}

// get
let getCategory = () =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            let categories = await db.Category.findAll();
            resolve( {
                errCode: 0,
                message: "ok!",
                categories
            } )

        }
        catch ( err )
        {
            reject( err );
        }
    } )
}

module.exports = {
    handlePostCategory: handlePostCategory,
    getCategory: getCategory
}