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
                data: categories
            } )

        }
        catch ( err )
        {
            reject( err );
        }
    } )
}

let deleteCategory = ( id ) =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            let cat = await db.Category.findOne( {
                where: { id: id },
            } )

            if ( !cat )
            {
                resolve( {
                    errCode: 2,
                    errMessage: 'Category not found!'
                } );
            }

            await db.Category.destroy( {
                where: { id: id },
            } );

            resolve( {
                errCode: 0,
                errMessage: 'Delete category succeed!'
            } );
        }
        catch ( err )
        {
            reject( err );
        }
    } )

}

module.exports = {
    handlePostCategory: handlePostCategory,
    getCategory: getCategory,
    deleteCategory: deleteCategory
}