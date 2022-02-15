import {useState} from "react"
import { Link } from "react-router-dom";
function ThreadCard ({whole, setThread}) {
    const [open, setOpen] = useState(false)
    console.log(whole)
    const handleDrop = () =>  {
        setOpen(!open)}
   
    return (
        <div className="threadCard" onClick={handleDrop}>
            <div>
           <header className="discuss_title">{whole.discussion_title}</header><p className="discuss_art">article: {whole.article_title} by: {whole.author}  </p>
        </div>
        
        {open === true ?<div className="discuss_drop">
        <span className="cardStats">created: {whole.created_at} last updated: {whole.updated_at}</span>

            {/* <header className="postby">{whole.} says:</header> */}
         <div className="dropdown2">{whole.first}</div>
         
         <br />
         <span className="replies"> {whole.posts.length === 1 ?  "1 reply" : `${whole.posts.length} replies`}  </span>
         <br />
         <br />
         <Link to="../thread"><span onClick={setThread(whole)} className='joinbutton'>Veiw discussion</span></Link>
         
        
        </div>
        
        
        
        
        
        : <div></div>}
    </div>
        )
}

export default ThreadCard
