// Ajax.js - uses Axios library

import axios from 'axios';

const url = "http://localhost/dev/php/lf-admit-queue-server/";              // must include final "/"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

// predefined request
const readCustomerQueueReq = {
    "rpc": "readCustomerQueue",
    "params": {},
    "objects": []
};

const getServerTimeReq = {
    "rpc": "getServerTime",
    "params": {},
    "objects": []
};

// this is not created with "new" - does not use "default" either
// pass in app so we can call setState() after response
export const AjaxObject = {

    readCustomerQueue(app) {
        axios.post(url, JSON.stringify(readCustomerQueueReq), headers)
            .then(response => {
                console.log(response.data);
                app.setState({custArray: response.data.objects});
            })
            .catch(error => {
                console.log(error);
            });
    },

    getServerTime(app) {
        axios.post(url, JSON.stringify(getServerTimeReq), headers)
            .then(response => {
                // console.log(response.data);
                alert(response.data.objects[0].time);
            })
            .catch(error => {
                // console.log(error);
            });
    }

}
