// // Helper actions for error, loading and data fetch success
// import * as service from '../api/customer';


export const saveUserAlbums = (albums) => {
    return {
        type: 'SAVE_USER_ALBUMS',
        payload:albums
    };
}

export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload:user
    };
}

export const saveAlbumPhotos = (photos) => {
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
                dispatch(saveUserAlbums(albums.data))
            }
          );
    }
}   


export const getUserPhotosByAlbum = (id) => {
    return (dispatch, getState) => {
        var albums = getState().user.albums;
        albums.map((album,key)=>{
            if(album.id == id){
                let {photos} = album;
                dispatch(saveAlbumPhotos(photos ? photos.data : []));
            }
        })
    }
}

