import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment, faHand } from '@fortawesome/free-solid-svg-icons';
const CommentBox = () =>{
    return (
        <div>
            <div className="comment-box">
                <div className="icon-container">
                    <div className="rounded-icon">
                        <FontAwesomeIcon icon={faHand}/>
                    </div>
                </div>
                <div className="text-container">
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                        
                    </span>
                </div>
            </div>
                <div className="comment-info">
                    <div className="comment-icon">
                        <FontAwesomeIcon icon={faComment}/>
                    </div>
                    <div className="comment-count">
                        <span>24 Comments</span>
                    </div>
                </div>       
        </div>
    )
}
export default CommentBox