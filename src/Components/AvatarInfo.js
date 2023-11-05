import Avatar from "./Avatar"
import { useCloseModal } from "./signin-context";
import moment from 'moment';
const AvatarInfo = ({imageSrc,timestamp}) =>{
    const {setShowModal1} = useCloseModal();
    const openModal1 = () => {
         setShowModal1(true)
    }
    return (
        <div className='header-info'> 
            <div className='avatar-info'>
                <Avatar image={imageSrc}/>
                    <div className='user-info'>
                        <h1 className="post-title-header">Theresa Webb</h1>
                        <p>
                            <span>{moment(timestamp).fromNow()}</span><span>. Edited</span>
                        </p>
                    </div>
            </div>
            <div>
                <p className="text-dot" onClick={openModal1}>...</p>
            </div>
        </div>
    )
}
export default AvatarInfo