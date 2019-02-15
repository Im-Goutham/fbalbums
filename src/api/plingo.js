import axios from 'axios';
import {config} from '../config';
const API = config.API;


export const  graphicsList = () => {
    return new Promise((resolve, reject) => {
        console.log('graphicsList api called.... ')
        axios.post(API+'/graphicsList', {
                type:"BackgroundImage",
                page:1,
                pagesize:10
        }).then(response => {
            if ( response.data.status == 1 )
            {
                resolve({backgrounds:response.data.data});
            }
            else
            {
                reject(response.data.message);
            }
        });
    });
};


export const  getTemplate = () => {
    return new Promise((resolve, reject) => {
        console.log('getTemplate api called.... ')
        axios.post(API+'/getTemplate', {
            customerId:"5c346ba53fa4040d3f73b9bd"
         }).then(response => {

            console.log('response from getTemplate is  ... ',response);
            if ( response.data.status == 1 )
            {
                resolve(response.data.data);
            }
            else
            {
                reject(response.data.message);
            }
        });
    });
};

export const  getLayoutTemplates = () => {
    return new Promise((resolve, reject) => {
        console.log('getLayoutTemplates api called.... ')
        axios.post(API+'/layoutListing', {
            "page":1,
            "pagesize":10
        }).then(response => {

            console.log('response from getLayoutTemplates is  ... ',response);
            if ( response.data.status == 1 )
            {
                resolve(response.data.data);
            }
            else
            {
                reject(response.data.message);
            }
        });
    });
};


export const  getElementsList = (type) => {
    return new Promise((resolve, reject) => {
        var dataObject =  {
            customerId:"5c346ba53fa4040d3f73b9bd",
            page:1,
            pagesize:10
        };
        if(type){
            dataObject = Object.assign({},dataObject,{type:type});
        }
        console.log('dataObject is ',dataObject);
        axios.post(API+'/customerGalleryListing',dataObject).then(response => {
            if ( response.data.status == 1 )
            {
                console.log('response after customerBackgroundList is ',response.data.data);
                resolve(response.data.data);
            }
            else
            {
                reject(response.data.message);
            }
        });
    });
};



export const  getLogoList = () => {
    return new Promise((resolve, reject) => {
        var dataObject =  {
            customerId:"5c346ba53fa4040d3f73b9bd",
            page:1,
            pagesize:10
        };
        console.log('came here to call customerLogoList');
        axios.post(API+'/customerLogoList',dataObject).then(response => {
            if ( response.data.status == 1 )
            {
                console.log('response after customerLogoList is ',response.data.data);
                resolve(response.data.data);
            }
            else
            {
                reject(response.data.message);
            }
        });
    });
};















