import React, { Component } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import { Button,Header, Card, Image ,Icon} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getUserAlbums } from '../../actions/user';


class Albums extends Component {


  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '386989675183136',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });
      window.FB.getLoginStatus(function(response) {
        this.props.getUserAlbums();
       // this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);
  
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  // componentDidMount(){
   
  // }  

  getPhotos(album){
       this.props.history.push(`/me/albums/${album.id}`)
  }

  logout= ()=>{
    console.log('function called ... ')
     window.FB.logout();
     this.props.history.push('/')
  }

  render() {
     let {user,albums} = this.props;
     if(!user){
         return  <Redirect to="/"/>
     }
    return (
         <React.Fragment>
              <Header as='h2'>
                  <Image src={user.picture.data.url}  /> Patrick
                  <Button basic color='blue' content='Log out' floated='right' onClick={this.logout}/>
              </Header>
              <Card.Group>
                    {
                            albums && albums.length > 0  ? (
                                albums.map((album,key)=>{
                                //    console.log('album is ',JSON.stringify(album));
                                    let {name,picture} = album;
                              //      console.log('picture is ',picture);
                                    return    <Card
                                                key={key}
                                                image={picture.data.url}
                                                header={name}
                                                meta='Album'
                                                onClick={this.getPhotos.bind(this,album)}
                                                />
                                })
                            ) :null
                    }
                 </Card.Group>
         </React.Fragment>
    );
  }
}




// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        albums: state.user.albums
    };
  }
  
  // Get actions to handle store data
  const mapDispatchToProps = (dispatch) => {
    return {
        getUserAlbums: (data) => dispatch(getUserAlbums(data))
    };
  }
  
  // Wire it all up and export
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Albums));
  

