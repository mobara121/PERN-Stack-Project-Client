let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1': 
        APIURL = 'http://localhost:3000';
        break;
    case 'kcp-pieclient.herokuapp.com':
        APIURL = 'http://kcp-pieapi.herokuapp.com'
        
}


export default APIURL;