import db from '../models/index';
import bcrypt from 'bcryptjs';
import user from '../models/user';

const salt = bcrypt.genSaltSync( 10 );


let hashUserPassword = ( password ) =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            //lưu ý, truyền vào đúng password cần hash
            // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
            let hashPassWord = await bcrypt.hashSync( password, salt );

            resolve( hashPassWord );
        } catch ( e )
        {
            reject( e );
        }

    } )
}


let checkUserEmail = ( userEmail ) =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            let user = await db.User.findOne( {
                where: { email: userEmail }
            } )
            if ( user )
            {
                resolve( true )
            } else
            {
                resolve( false )
            }

        } catch ( e )
        {
            reject( e )
        }
    } )
}

let handleLogin = ( email, password ) =>
{
    return new Promise( async ( resolve, reject ) =>
    {
        try
        {
            let userData = {};
            let isExist = await checkUserEmail( email );
            if ( isExist )
            {
                //user already exist
                let user = await db.User.findOne( {
                    attributes: [ "id", 'email', 'roleId', 'password', 'firstName', 'lastName' ],
                    where: { email: email },
                    raw: true,

                } );
                if ( user )
                {
                    //compare password: dùng cách 1 hay cách 2 đều chạy đúng cả =))
                    // Cách 1: dùng asynchronous (bất đồng bộ)
                    let check = await bcrypt.compare( password, user.password );


                    // Cách 2: dùng synchronous  (đồng bộ)
                    // let check = bcrypt.compareSync(password, user.password);

                    if ( check )
                    {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        delete user.password;
                        userData.user = user;
                    }
                    else
                    {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else
                {
                    userData.errCode = 2;
                    userData.errMessage = `User not found`;
                }

            } else
            {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in our system, plz try other email`
            }
            resolve( userData )
        } catch ( e )
        {
            reject( e );
        }
    } )
}


module.exports = {
    handleLogin: handleLogin,
    hashUserPassword: hashUserPassword,
}