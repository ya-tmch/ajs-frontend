module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/spa/artem/dist/'
        : '/'
}
