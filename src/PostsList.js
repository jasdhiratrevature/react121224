const PostsList = ({posts}) => {
    return (
        <div>
            <h2>Post List</h2>
              {posts.map((post)=>(
               <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
               </div>

              )) }
            
           
        </div>
      );
}
 
export default PostsList;