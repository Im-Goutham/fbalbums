import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { saveUser, getUserAlbums } from '../../actions/user';
import './index.css';

class Home extends Component {

  responseFacebook =(data)=>{
      console.log('response from fb is ',JSON.stringify(data));
      if(data.accessToken){
          this.props.saveUser(data);
          this.props.getUserAlbums();
          this.props.history.push('/me/albums')
      }
    
  }
 

  render() {
    let {user} = this.props;
    if(user){
        return  <Redirect to="/me/albums"/>
    }
    return (
         <React.Fragment>
           <div className="login">
               <FacebookLogin
                    appId="386989675183136"
                    autoLoad={true}
                    scope="public_profile,email,user_friends,user_photos"
                    fields="name,email,picture.height(2048)"
                    cssClass="ui facebook button"
                    callback={this.responseFacebook}     
                  />
          </div>     
         </React.Fragment>
    );
  }
}






// Get state data from store to props
const mapStateToProps = (state) => {
  return {
    
  };
}

// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
  return {
      getUserAlbums: (data) => dispatch(getUserAlbums(data)),
      saveUser: (data) => dispatch(saveUser(data)),
  };
}

// Wire it all up and export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

