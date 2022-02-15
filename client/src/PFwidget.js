import {useState} from 'react';
function PFwidget  ({currentUser, isAuthenticated, setCurrentUser}) {
   const [editor, showEditor] = useState(false)
    const [profile, showProfile] = useState(false)

    const handleDrop = () => {
        showProfile(!profile)
    }
    const handleLogout = () => {
        setCurrentUser(null);
        fetch("/logout", { method: "DELETE" }); 
       
    }

  return<>{isAuthenticated ?<> <div className="pw">
      <img onClick={handleDrop} className="colIMG" src={currentUser.img_url} />
    </div><div >
{profile ? <div className="veiwDrop"><header>username: {currentUser.user_name}</header><p>about: {currentUser.user_bio}</p> <span onClick={handleLogout} className="loggout">log out</span></div> 

: <div></div>}
</div> </>: console.log("noone home")}
{editor? <form></form> : null}
</>
};

export default PFwidget;
