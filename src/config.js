let REQUEST_URL =  'http://120.78.12.39:8090';;
if (process.env.NODE_ENV !== "PRODUCTION") {
    REQUEST_URL = 'http://127.0.0.1:8899'
}
const UPDATE_FILE_URL = `${REQUEST_URL}/file/uploadfile`;

module.exports = {UPDATE_FILE_URL,REQUEST_URL};