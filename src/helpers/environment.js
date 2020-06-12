let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1': 
        APIURL = 'http://localhost:3000';
        break;
    case 'ramen-restaurant-list.herokuapp.com':
        APIURL = 'https://find-ramen-restaurant.herokuapp.com'
}


export default APIURL;