import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";



class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile}/>
                <MyPostsContainer/>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);