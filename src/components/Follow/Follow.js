import React, { useEffect, useState } from "react";
import { client } from "../../utils";
import ThemeButton from '../ThemeButton/ThemeButton'

const Follow = ({ nobtn, isFollowing, incFollowers, decFollowers, userId }) => {
    const [followingState, setFollowingState] = useState(isFollowing);

    useEffect(
        () => setFollowingState(isFollowing),
        [isFollowing]);

    const handleFollow = () => {
        if (followingState) {
            setFollowingState(false);
            if (decFollowers) {
                decFollowers();
            }
            client(`/users/${userId}/unfollow`);
        } else {
            setFollowingState(true);
            if (incFollowers) {
                incFollowers();
            }
            client(`/users/${userId}/follow`);
        }
    };

    if (followingState) {
        return (
            <>
                {nobtn ? (
                    <span
                        style={{ color: "#262626" }}
                        className="pointer"
                        onClick={() => handleFollow()}
                    >
                        Following
                    </span>
                ) : (
                        <ThemeButton size='medium' primary onClick={() => handleFollow()}>Following</ThemeButton>
                    )}
            </>
        );
    } else {
        return (
            <>
                {nobtn ? (
                    <span className="pointer" onClick={() => handleFollow()}>
                        Follow
                    </span>
                ) : (
                        <ThemeButton size='medium' onClick={() => handleFollow()}>Follow</ThemeButton>
                    )}
            </>
        );
    }
};

export default Follow;