import React from "react";
import UserAvatar from "react-user-avatar";

const ProfilePhoto = props => (
    <UserAvatar 
        size="70"
        name={props.name}
        src={props.profile_pic}
    />
);

export default ProfilePhoto;