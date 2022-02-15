

function UserCard ({ poster, comment}) {

    console.log(comment)
    
  return (
  <div className="userCard"  >
      <header>username: {poster.user_name}</header>
      <p>bio: {poster.user_bio}</p>

  </div>)
};

export default UserCard;
