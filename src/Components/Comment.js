const Comment = () =>{

    return(
        <div class="container">
            <div className='container-post'>
                <div className='container-header text-left'>
                    <h2>Hello Jane</h2>
                    <p>How are you doing Today? Would you like to share something with the commnunity</p>
                </div>
                <div className="post-form">
                    <h2 className="post-title-header text-left">Create Post</h2>
                    <textarea
                        placeholder="Write your post here..."
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    />
                    {showModal1 && <SignupModal/>}
                    <div className="message-icon">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className='btn-container'>
                        <button onClick={openModal1}>Post</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Comment