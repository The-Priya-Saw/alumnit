import { useState } from "react"
import CommunityPostsConext from "./CommunityPostsContext"

const CommunityPostsState = (props) => {
    const [CommunityPostList, updateCommunityPostList] = useState([]);
    return <CommunityPostsConext.Provider value={{CommunityPostList, updateCommunityPostList}}>
        {props.children}
    </CommunityPostsConext.Provider>
}

export default CommunityPostsState;