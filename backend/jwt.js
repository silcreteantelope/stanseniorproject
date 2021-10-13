const jwt = require('express-jwt');

export function generateJWT(payload) {
    jwt({ secret: 'superSecretSecret', algorithms: ['HS256']})
}

export function validateJWT(jwt) {

}