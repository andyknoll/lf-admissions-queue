// Ajax.js - uses Axios library

import axios from 'axios';

const url = "http://localhost/dev/php/lf-admit-queue-server/";              // must include final "/"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

// this is not created with "new" - do not use "default" either
export const AjaxObject = {
    
    readCustomerQueue(app) {
        //alert("AjaxObject.readCustomerQueue");

        let req = {
            "rpc": "readCustomerQueue",
            "params": {},
            "objects": []
        };
        let reqJson = JSON.stringify(req);

        axios.post(url, reqJson, headers)
            .then(response => {
                console.log(response.data);
                app.setState({contactArray: response.data.objects});
            })
            .catch(error => {
                console.log(error);
                alert("ajaxObject - AJAX ERROR: " + error);
            });
    }

}
