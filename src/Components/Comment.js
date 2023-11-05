import './Comment.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import SignupModal from './SignupModal';
import { useCloseModal } from './signin-context';
import CommentBox from './CommentBox';
import AvatarInfo from './AvatarInfo';
const Comment = () =>{
    const [postText, setPostText] = useState('');
    //const [showModal,setShowModal] = useState(false)
    const {showModal1,setShowModal1,showModal2,setShowModal2} = useCloseModal();
    const openModal1 = () => {
         setShowModal1(true)
    }
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
                <div className="post-form">
                    <AvatarInfo  imageSrc="https://gravatar.com/userimage/242153183/913f47040f2be20c1cc01fa4664a65e4.jpeg?size=256" timestamp="2023-11-04T14:30:00"/>
                    <CommentBox/>       
                </div>
                <div className="post-form">
                    <AvatarInfo imageSrc="https://gravatar.com/userimage/242153183/89f39e17f5897e3466448e0782788b5c.jpeg?size=256" timestamp="2023-11-04T15:45:00"/>
                    <CommentBox/>       
                </div>
            </div>
        </div>
    )
}

export default Comment