// Reducers for error, loading and data fetch
var initialState = {
    user: {},
    albums: [],
    photos: []
};

export const user = (state = initialState, action) => {
   switch (action.type) {
       case 'SAVE_USER':
           return Object.assign({},state,{user:action.payload});
       case 'SAVE_USER_ALBUMS':
           return Object.assign({},state,{albums:action.payload});
       case 'SAVE_ALBUM_PHOTOS':
           return Object.assign({},state,{photos:action.payload});   
       default:
           return state;
   }
}


