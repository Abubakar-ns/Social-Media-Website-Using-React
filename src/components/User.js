import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearAuthState} from '../actions/auth';
import { fetchUserProfile } from '../actions/profile';
import {getAuthTokenFromLocalStorage} from '../helpers/utils';
import {addFriend,removeFriend} from '../actions/friends';
import {APIUrls} from '../helpers/urls';
class User extends Component {
    constructor (props){
        super(props);
        this.state={
           success: null,
           error: null,
           succesMessage: null,
        }
    }
    componentDidMount() {
        const {match}=this.props;
        if(match.params.userId){
            //dispatch an action to fetch 
            this.props.dispatch(fetchUserProfile(match.params.userId));
        }
    }
    
    checkIfUserIsAFriend=()=>{
        console.log('this.props',this.props);
        const {match,friends}=this.props
        const userId=match.params.userId;
        const index=friends.map(friend => friend.to_user._id).indexOf(userId);//user
        if(index!==-1){
            return true;
        }
        return false;
    }
    
    // componentWillUnmount() {
    //     this.props.dispatch(clearAuthState());
    // }
    handleAddFriendClick= async ()=>{
        const userId = this.props.match.params.userId;
        const url=APIUrls.addFriend(userId);
        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
              },
        };
        const response = await fetch(url,options);
        const data = await response.json();
        if(data.success){
            this.setState({
                success: true,
                succesMessage: 'Added Friend Succesfully',
            });
            this.props.dispatch(addFriend(data.data.friendship));
        }
        else{
            this.setState({
                success: false,
                error: data.message,
            });
        }
        //async await

    }
    handleRemoveFriendClick= async ()=>{
        const userId = this.props.match.params.userId;
        const url=APIUrls.removeFriend(userId);
        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
              },
        };
        const response = await fetch(url,options);
        const data = await response.json();
        console.log('remove friend data',data);
        if(data.success){
            this.setState({
                success: true,
                succesMessage: 'Removed Friend Succesfully',
            });
            this.props.dispatch(removeFriend(userId));
        }
        else{
            this.setState({
                success: false,
                error: data.message,
            });
        }
        //async await

    }
    
    render() {
        const {match: {params},profile}=this.props;
        
        const user=profile.user;
        if(profile.inProgress){
            return <h1>Loading</h1>
        }
        const isUserAFriend=this.checkIfUserIsAFriend();
        const {success,error,succesMessage}=this.state;
        return (
            <div className="settings">
                <div className="img-container">
                <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                />
                </div>
                <div className="field">
                    <div className="field-label">Email</div>
                    <div className="field-value">{user.email}</div>
                </div>
                <div className="field">
                <div className="field-label">Name</div>
                    <div className="field-Value">{user.name}</div>
                </div>
                <div className="btn-grp">
                    {!isUserAFriend ?
                        <button className="button save-btn" onClick={this.handleAddFriendClick}>Add Friends</button>
                        :
                        <button className="button save-btn" onClick={this.handleRemoveFriendClick}>Remove Friends</button>
                    }
                    {success && <div className="alert success-dailog"> {succesMessage}</div> }
                    {error && <div className="alert error-dailog">{error}</div> }
                </div>
            </div>
        );
    }
}
function mapStateToProps( {profile,friends} ) {
    return {
        profile,
        friends,
    };
}
export default connect(mapStateToProps)(User);