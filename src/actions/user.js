// // Helper actions for error, loading and data fetch success
// import * as service from '../api/customer';


export const saveUserAlbums = (albums) => {
    console.log('user albums are ',albums);
    return {
        type: 'SAVE_USER_ALBUMS',
        payload:albums
    };
}

export const saveUser = (user) => {
    console.log('user are ',user);
    return {
        type: 'SAVE_USER',
        payload:user
    };
}

export const saveAlbumPhotos = (photos) => {
    console.log('album photos are ',JSON.stringify(photos));
    return {
        type: 'SAVE_ALBUM_PHOTOS',
        payload:photos
    };
}


// Driver action to fetch data

export const getUserAlbums = () => {
    return (dispatch) => {
        window.FB.api(
            '/me',
            'GET',
            {"fields":"id,name,albums{id,name,description,cover_photo,picture{url,height,cache_key,is_silhouette,width},photos{album,images,picture}}"},
            function({albums}) {
                console.log('response is ',JSON.stringify(albums));
                dispatch(saveUserAlbums(albums.data))
            }
          );
    }
}   


export const getUserPhotosByAlbum = (id) => {
    return (dispatch, getState) => {
       // console.log('get state is ..  ',getState().user.albums)
        var albums = getState().user.albums;
        albums.map((album,key)=>{
            if(album.id == id){
                console.log('album is ',album);
                let {photos} = album;
                dispatch(saveAlbumPhotos(photos ? photos.data : []));
                console.log('photos is ..  ',photos) 
            }
            
        })
    }
}

