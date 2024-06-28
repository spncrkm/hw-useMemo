import React from "react";

const PostContent = React.memo(({ content }) => {
  return (
    <div>
      {content ? (
        <>
          
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </>
      ) : (
        <>
          <h2>Select a post</h2>
        </>
      )}
    </div>
  );
});

export default PostContent;
