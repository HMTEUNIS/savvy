import {useState, useEffect} from 'react'
import ThreadCard from './ThreadCard'
function VeiwExisting ({art, setThread}) {
    const [discussions, setDiscussions] = useState([])
    console.log("art", art.title)
    useEffect(() => {
        fetch(`http://localhost:3000/discussions`)
        
        .then ((res) => res.json())
        .then ((data ) => {
            setDiscussions(data)
        })
      }, []);
      console.log("dsfs")
    console.log("VE DIS", discussions)
    const found = discussions.filter((dis) => {
        if (art.title === "") {
            return dis
        } else if ( dis.article_title.toLowerCase().includes(art.title.toLowerCase())) {
            return dis
        
       
        }
    })
    
    console.log("found", found)
    return (

        <div className="discuss">
        <header className="discussHead">Join a conversation. (or just feel free to lurk)</header>
        {/* <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Search discussions by title" className="searchThreads" /> */}
       {/* Sort by: <select ><option value="latest"  >Most Recently Updated</option > <option value="chron"  >Newest -> Oldest</option ><option value="revchron"  >Oldest -> Newest</option > <option value="busiest"  >Busiest</option >  </select> */}
   <br />
   <br />
    {found.map(thread => <ThreadCard   setThread={setThread} whole={thread} />)}
    </div>
    )
}

export default VeiwExisting
