import ThreadCard from "./ThreadCard"
import {useEffect, useState} from 'react'
function Discuss({setThread, re}) {
const [discussions, setDiscussions] = useState ([])
const [searchTerm, setSearch] = useState ("")
useEffect(() => {
    fetch(`/discussions`)
    
    .then ((res) => res.json())
    .then ((data ) => {
        setDiscussions(data)
    })
  }, [re]);

  const searched = discussions.filter((dis) => {
    if (searchTerm === "") {
        return dis
    } else if ( dis.discussion_title.toLowerCase().includes(searchTerm.toString().toLowerCase())) {
        return dis
    
   
    }
})
    const updated_sort = discussions.sort

    return (
        <div className="discuss">
            <header className="discussHead">Join a conversation. (or just feel free to lurk)</header>
            <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Search discussions by title" className="searchThreads" />
          
       <br />
       <br />
        {searched.map(thread => <ThreadCard   setThread={setThread} whole={thread} />)}
        </div>
    )
}

export default Discuss
