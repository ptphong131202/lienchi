import { request } from 'express';
import user from '../services/userService';

// login
let handleLogin = async ( req, res ) =>
{

    let email = req.body.email;
    let password = req.body.password;
    console.log( email, password );
    // check email and password != null
    if ( !email || !password ) 
    {
        return res.status( 500 ).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        } )
    }

    let userData = await user.handleLogin( email, password )

    return res.status( 200 ).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    } )

}


module.exports = {
    handleLogin: handleLogin
}