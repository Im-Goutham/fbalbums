import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import { connect } from 'react-redux';
import { getUserPhotosByAlbum } from '../../actions/user';


class Photos extends Component {

  constructor(props){
     super(props);
     this.state = {
          visible: false,
          activeIndex: 0
     }
  }

  componentDidMount(){
         const { match: { params } } = this.props;
         this.props.getUserPhotosByAlbum(params.id);
  }  


  render() {
     let {photos} = this.props;
     let {activeIndex,visible} = this.state;
     let previewImages = [];
     if(photos.length > 0){
        previewImages = photos.map((photo,key)=>{
              return {src: photo.images[0].source, alt: photo.picture}
        })
     }
    return (
         <React.Fragment>
           <Image.Group size='small'>
                {
                    photos && photos.length>0 ? (
                        photos.map((photo,key)=>{
                           let {picture} = photo;
                           return  <Image src={picture} onClick={() => { this.setState({ visible: !visible,activeIndex : key}); } }/>
                        })
                    ) : null
                }
           </Image.Group>  
           <Viewer
                visible={visible}
                onClose={() => { this.setState({ visible: false }); } }
                images={previewImages}
                activeIndex={activeIndex}
                rotatable={false}
                scalable={false}
                downloadable={false}
                drag={false}
                zoomable={false}
                attribute={false}
                />
         </React.Fragment>
    );
  }
}






// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        photos: state.user.photos
    };
  }
  
  // Get actions to handle store data
  const mapDispatchToProps = (dispatch) => {
    return {
        getUserPhotosByAlbum: (data) => dispatch(getUserPhotosByAlbum(data))
    };
  }
  
  // Wire it all up and export
  export default connect(mapStateToProps, mapDispatchToProps)(Photos);
  

