
import {useState} from 'react'
import Talk from './Talk'
function NewThread ({art, currentUser}) {
    const [postTitle, setTitle] = useState("")
    const [postBody, setBody] = useState("")
    const [formErrors, setFormErrors] = useState([]);
    const [talkText, setTT] = useState("")
    const [NTrec, setNTrec] = useState(false)

    function postSubmit (e){
        e.preventDefault();
      
        const newDiscussion = {
            discussion_title: postTitle,
            core_id: art.id,
            user_id: currentUser.id,
            author: JSON.stringify(art.authors),
            article_title: art.title,
            first: postBody }
            console.log(newDiscussion)
       
        fetch("/discussions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDiscussion),
        }).then((r) => {
          {
            r.json().then((err) => setFormErrors(err.errors));
          }
        }).then( 
            window.location.href="/discuss"
        )}

console.log("tt", talkText)
const NTrecord = (e) => {
 
  setBody(talkText)  
 setNTrec(!NTrec)
  console.log(postBody)
    }

    return (

      
        <div >
          {currentUser ? <>
            <span className="ntt">{art.title}</span><p className="nta"> by: {art.authors} </p><p className="ntid"> Article CORE id: {art.id}</p> 
           
            <form onSubmit={postSubmit}><input type="text"  placeholder="discussion title" onChange={e => setTitle(e.target.value)}></input><
              textarea className="postForm" value={NTrec ? talkText : console.log(false)}  placeholder="whats on your mind?" onChange={e => setBody(e.target.value) }></textarea><input type="submit"  /></form>
           <div onClick={NTrecord}> <Talk setTT={setTT}/>  </div> </>
           : <p>Log in to start a new conversation!</p>  }
        </div>


   )
}

export default NewThread
