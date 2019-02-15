import axios from 'axios';
import {config} from '../config';
const API = config.API;

    
export const  getCustomerGalleryList = () => {
        return new Promise((resolve, reject) => {
            console.log('api called.... ')
            axios.post(API+'/customerGalleryList', {
                customerId:"5c346ba53fa4040d3f73b9bd"
            }).then(response => {
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



    export const  uploadPlingo = () => {
        return new Promise((resolve, reject) => {
            console.log('api called.... ')
            axios.post(API+'/plingoUpload', {
                customerId:"5c346ba53fa4040d3f73b9bd"
            }).then(response => {
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


    export const  deleteImage = (_id) => {
        return new Promise((resolve, reject) => {
            console.log('api called deleteImage...._id is  ',_id)
            axios.post(API+'/deleteImage', {
                customerId:"5c346ba53fa4040d3f73b9bd",
                _id
            }).then(response => {
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

    export const  clearRecentMedia = () => {
        return new Promise((resolve, reject) => {
            console.log('api called clearRecentMedia.... ')
            axios.post(API+'/clearRecentMedia', {
                customerId:"5c346ba53fa4040d3f73b9bd"
            }).then(response => {
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


    export const  customerBackgroundList = () => {
        return new Promise((resolve, reject) => {
            console.log('api called customerBackgroundList.... ')
            axios.post(API+'/customerBackgroundList', {
                customerId:"5c346ba53fa4040d3f73b9bd",
                page:1,
                pagesize:10
            }).then(response => {
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





