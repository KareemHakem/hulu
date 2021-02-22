import "./Stylepost.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
export default function Post({text, text2, image, likes}) {
    return (
        <div className="post">
            <img className="bird" src={image} alt="i"/>
            <p className='text' >{text}</p> 
            <p className="name">{text2}</p>

           <div className='flex'>
               <p className='likes' >{likes}</p>
               <ThumbUpAltIcon fontSize='large'/>        
           </div>
           
        </div>
    )
}
