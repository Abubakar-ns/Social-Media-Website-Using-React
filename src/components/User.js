import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearAuthState} from '../actions/auth';
import { fetchUserProfile } from '../actions/profile';

class User extends Component {
    componentDidMount() {
        const {match}=this.props;
        if(match.params.userId){
            //dispatch an action to fetch 
            this.props.dispatch(fetchUserProfile(match.params.userId));
        }
    }
    
    // constructor (props){
    //     super(props);
    //     this.state={
    //         name: props.auth.user.name,
    //         email: props.auth.user.name,
    //     }
    // }
    // componentWillUnmount() {
    //     this.props.dispatch(clearAuthState());
    // }
    
    render() {
        const {match: {params},profile}=this.props;
        
        const user=profile.user;
        if(profile.inProgress){
            return <h1>Loading</h1>
        }
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
                    <button>Add Friends</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps( {profile} ) {
    return {
        profile,
    };
}
export default connect(mapStateToProps)(User);