//const CommentsListDemo = (props) => {
  //  const comments=props.comments
    const CommentsListDemo = ({comments,handleDelete}) => {
    return ( 
        <div >
            {comments.map((comment)=>(
                <div key={comment.id}>
                   <h2>{comment.name}</h2> 
                   <p>{comment.body}</p>
                   <button onClick={()=>handleDelete(comment.id)}>Delete Comment</button>
                </div>
            ))}
        </div>
     );
}
 
export default CommentsListDemo;