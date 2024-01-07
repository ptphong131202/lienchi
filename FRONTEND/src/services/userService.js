import axios from '../axios'

// function handle login
const handleLoginApi = ( email, password ) =>
{
    return axios.post( 'api/login', { email, password } ); // request len server
}

// category
const createCategory = ( data ) =>
{
    return axios.post( 'api/post-category', data ); // request len server
}

const getCategory = () =>
{
    return axios.get( 'api/get-category' );
}
export
{
    handleLoginApi, createCategory, getCategory

};