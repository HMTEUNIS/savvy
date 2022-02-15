import {useState, useEffect} from 'react'
import gsap from 'gsap';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import UserCard from './UserCard';
import Talk from"./Talk"
function Thread ({thread, setRe, re, currentUser, poster, setPoster}) {
const [com, setcom] = useState ('')
const [formErrors, setFormErrors] = useState([]);
const [display, setDisplay] = useState([])
const [show, setShow] = useState([])
const [talkText, setTT] = useState("")
const [Trec, setTRec] = useState(false)




useEffect(() => {
    fetch(`/discussions/${thread.id}`)
    .then ((res) => res.json())
    .then ((data ) => {
        setDisplay(data)
    })
  }, [re]);

console.log(thread)


function handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
        user_id: currentUser.id,
        discussion_id: thread.id,
      comment: com,
    };
    console.log(formData);
   
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      {
        r.json().then((err) => setFormErrors(err.errors));
      }
    }).then(  
        window.location.href="/discuss"
      
       
    );
   

  }
  const handleThreadRec = (e) => {
setcom(talkText)  
 setTRec(!Trec)
  }

  function showPoster  (poster)  {
    setPoster( poster)
  }

const onEnter = ({ currentTarget, poster }) => {
  gsap.to(currentTarget, {  scale: 1.8, zindex: 2 });
 

};
const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "#1dd7367e", scale: 1, zindex: 1 })
  
};

function deleteComment (e) {
  
  fetch(`/posts/${e}`, {
  method: 'DELETE', 
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
}).then(  
  window.location.href="/discuss")
}
const linkClick = (e) => {
window.open(`https://core.ac.uk/display/${thread.core_id}?recSetID=`)

}
    return (
 <>
  
  
    <div>Click to view article:<a onClick={linkClick} className="thread_art">{display.article_title} by: {thread.author} || CORE ID {thread.core_id} </a>
    </div>
     <header className="discuss_title">{thread.discussion_title}</header>
     <p>{thread.first}</p>
    <br></br>
   
   {thread.posts.map(comment => <div className="eachPost" > <div  > <Popup 
    trigger={open => (
      <img   onMouseEnter={onEnter} onMouseLeave={onLeave} className="thread_user_img" src={comment.user.img_url} />
    )}
    
    closeOnDocumentClick
  >
    <UserCard poster={comment.user} comment={comment}/>
  </Popup> <header className="postby">{comment.user.user_name} </header></div>
     <div className="commentDisplay"> {comment.comment}  </div> {currentUser ? comment.user_id == currentUser.id ?<span className="delete" onClick={e => deleteComment(comment.id)}>delete comment</span> : console.log("nah") : console.log("loggedout")}</div>
     
   )} 
   <br />
   {currentUser ? <img  className="thread_user_img" src={currentUser.img_url} /> : null}
        <header className="postby">What do you think?</header>
     {currentUser ? <> <div> 
    
           
            <form onSubmit={handleSubmit}><textarea className="postForm"  value={Trec ? talkText : console.log("stuff")} onChange={e => setcom(e.target.value)}></textarea><input type="submit"  /></form>
            
        </div>
        <div onClick={handleThreadRec}>

           <Talk setTT={setTT}/>
          
</div> </>: <p>Log in to join in!</p>}
     </>

    )
}

export default Thread
