import { useState } from "react";
import { Link } from "react-router-dom";

export default ArticleCard;
function ArticleCard({ article, setter }) {
  const [open, setOpen] = useState(false);
  const [talk, setTalk] = useState(false);
  function linkClick(e) {
    window.open(e.target.innerHTML);
  }
  const handleDrop = () => {
    setOpen(!open);
  };
  const displayThreadLinks = () => {
    setTalk(!talk);
  };
  const createThread = (e) => {
    setter(article);
  };

  const findExisting = (e) => {
    setter(article);
  };
  return (
    <div className="articleCard">
      <div className="adrop" onClick={handleDrop}>
        <span className="articleTitle"> {article.title}</span>
        <br />
        by:<span className="articleAuthor"> {article.author}</span>
        {article.authors}
      </div>
      {open === true ? (
        <div className="dropdown">
          <span onClick={linkClick} className="fullURL">
            {" "}
            {article.fulltextUrls.map((url) => (
              <p>{url}</p>
            ))}
          </span>

          <br />
          {talk === false ? (
            <div>
              {" "}
              <span onClick={displayThreadLinks} className="startThread">
                Let's Talk About It
              </span>
            </div>
          ) : (
            <div>
              <Link to="../newThread">
                <span onClick={createThread} className="startNewThread">
                  Start new discussion.
                </span>
              </Link>
              <Link to="../veiwexisting">
                <span onClick={findExisting} className="veiwExisting">
                  View existing.
                </span>
              </Link>{" "}
            </div>
          )}
        </div>
      ) : null}

      <br />
    </div>
  );
}
