import React, { useState, createContext, useEffect } from "react";

export const FeedContext = createContext(null);

export const FeedProvider = ({ children }) => {
    const [feed, setFeed] = useState(null);

    const [whoFollow, setWhoFollow] = useState(null);

    const [tags, setTags] = useState([]);

    return (
        <FeedContext.Provider value={{ feed, setFeed, whoFollow, setWhoFollow, tags, setTags }}>
            {children}
        </FeedContext.Provider>
    );
};

export default FeedProvider;