import React, { useState, createContext, useEffect } from "react";
import { client } from "../utils";

export const FeedContext = createContext(null);

export const FeedProvider = ({ children }) => {
    const [feed, setFeed] = useState(null);

    const [whoFollow, setWhoFollow] = useState([]);

    const getWhoFollow = () => {
        client("/users")
            .then((response) => {
                setWhoFollow(response.data.filter((user) => !user.isFollowing));
            });
    }


    return (
        <FeedContext.Provider value={{ feed, setFeed, whoFollow, getWhoFollow }}>
            {children}
        </FeedContext.Provider>
    );
};

export default FeedProvider;