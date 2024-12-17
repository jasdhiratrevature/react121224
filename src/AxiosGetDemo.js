import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostsList";

const AxiosGetDemo = () => {
    const[posts,setPosts]=useState([])
   
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
       //axios.get("http://localhost:8000/posts")
        .then(res=>{
           // console.log(res);
           setPosts(res.data)
        })
     },[])
    return ( 
        <>
        <h2>Data from API</h2>
      {posts && <PostList posts={posts}/>}
        </>
     );


}
 
export default AxiosGetDemo;