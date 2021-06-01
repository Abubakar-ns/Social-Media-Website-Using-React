import React, { Component } from 'react';
import {connect} from 'react-redux';
class Settings extends Component {
    constructor (props){
        super(props);
        this.state={
            name: '',
            password:'',
            confirmPassword:'',
            editMode: false,
        }
    }
    render() {
        const {user}= this.props.auth;
        const {editMode} =this.state;
        return (
            <div className="settings">
                <div className="img-container">
                <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                    id="user-dp"
                />
                </div>
                <div className="field">
                    <div className="feild-label">Email</div>
                    <div className="feild-label">{user.email}</div>
                </div>
                <div className="field">
                    <div className="feild-label">Name</div>
                    {
                    editMode
                    ?
                    <input 
                        type="text" 
                        onChange={()=>this.handleChange()} 
                        value={this.state.name}
                    />
                    :
                    <div className="feild-label">{user.name}</div>}
                </div>
                {editMode && <div className="feild">
                    <div className="field-label">New Password</div>
                    <input type="password" 
                        onChange={()=>this.handleChange()}
                        value={this.state.password}
                     />
                     <div className="field-label">Confirm Password</div>
                    <input type="password" 
                        onChange={()=>this.handleChange()}
                        value={this.state.confirmPassword}
                     />
                    </div>}
                <div className="btn-grp">
                    {
                    editMode
                        ?
                        <button className="button-save-btn">Save</button>
                        :
                    <button className="button-edit-btn">Edit Profile</button>
                    }
                    {
                        editMode && <div className="go-back">
                            Go Back
                        </div>
                    }
                </div>
            </div>
        );
    }
}
export default mapStateToProps({auth}){
    return {
        auth,
    };
}
export default connect(mapStateToProps)(Settings);