import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearAuthState, editUser } from '../actions/auth';

class Settings extends Component {
    constructor (props){
        super(props);
        this.state={
            name: props.auth.user.name,
            password:'',
            confirm_password:'',
            editMode: false,
        }
    }
    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }
    
    handleChange=(feildName,val)=>{
        this.setState({
            [feildName]:val,
        })
    }
    handleSave=()=>{
        const {password,confirm_password,name}=this.state;
        const {user}=this.props.auth;
        console.log('userId',user);
        this.props.dispatch(editUser(name,password,confirm_password,user._id));
    };
    render() {
        const {user,error}= this.props.auth;
        const {editMode} =this.state;
        return (
            <div className="settings">
                <div className="img-container">
                <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                />
                </div>
                {error && <div className="alert error-dailog">{error}</div>}
                {error==false && <div className="alert success-dailog">Changes Saved Successfully</div>}
                <div className="field">
                    <div className="field-label">Email</div>
                    <div className="field-value">{user.email}</div>
                </div>
                <div className="field">
                    <div className="field-label">Name</div>
                    {
                    editMode
                    ?
                    <input 
                        type="text" 
                        onChange={(e)=>this.handleChange('name',e.target.value)} 
                        value={this.state.name}
                    />
                    :
                    <div className="field-value">{user.name}</div>}
                </div>
                {editMode && <div className="field">
                    <div className="field-label">New Password</div>
                    <input type="password" 
                        onChange={(e)=>this.handleChange('password',e.target.value)}
                        value={this.state.password}
                     />
                     <div className="field-label">Confirm Password</div>
                    <input type="password" 
                        onChange={(e)=>this.handleChange('confirm_password',e.target.value)}
                        value={this.state.confirmPassword}
                     />
                    </div>}
                <div className="btn-grp">
                    {
                    editMode
                        ?
                        <button className="button-save-btn" onClick={this.handleSave}>Save</button>
                        :
                    <button className="button-edit-btn" onClick={()=>this.handleChange('editMode',true)}>Edit Profile</button>
                    }
                    {
                        editMode && <div className="go-back" onClick={()=>this.handleChange('editMode',false)}>
                            Go Back
                        </div>
                    }
                </div>
            </div>
        );
    }
}
function mapStateToProps( {auth} ) {
    return {
        auth,
    };
}
export default connect(mapStateToProps)(Settings);