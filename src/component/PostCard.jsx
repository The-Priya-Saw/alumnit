import React from 'react'
import "./PostCard.css";


const PostCard = (props) => {
    return (
        <div className="PostCard">
            <div className="CardHeader">
                <img className="profilePic" src={props.profileImage} alt="" />

                <h3 className="username">{props.username}</h3>
            </div>
            <div className="PostContent">
                <div className="PostDecription" src="">{props.description}</div>
                
                {
                    props.postImage ? <img className="PostImage" src={props.postImage}/> : null
                }
                
            </div>
            <div className="ActionButtons">
                    <span class="material-symbols-outlined">thumb_up</span>
                    <span class="material-symbols-outlined">comment</span>
            </div>
        </div>
    )
}

export default PostCard

{/* <div className="PostCard">
<div className="CardHeader">
    <img className="profilePic" src="https://www.pngfind.com/pngs/m/176-1760995_png-file-svg-user-icon-free-copyright-transparent.png" alt="" />

    <h3 className="username">Username</h3>
</div>
<div className="PostContent">
    <div className="PostDecription" src="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    
    <img className="PostImage" src="https://picsum.photos/seed/picsum/536/354"></img>
</div>
<div className="ActionButtons">
        <span class="material-symbols-outlined">thumb_up</span>
        <span class="material-symbols-outlined">comment</span>
</div>
</div> */}