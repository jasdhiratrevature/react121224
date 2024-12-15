import { useEffect, useState } from "react";
import CommentsListDemo from "./CommentsListDemo";

const ListKeysDemo = () => {
    const [comments,setComments]=useState([
        {"id":1,"name": "id labore ex et quam laborum","email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {"id":2,"name": "quo vero reiciendis velit similique earum","email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {"id":3, "name": "odio adipisci rerum aut animi","email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
            {"id":4,"name": "alias odio sit","email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
            }
    ])
    const [name,setName]=useState("Jasdhir");
    const handleDelete=(id)=>{
        const newComments=comments.filter(comment=>comment.id!==id);
        setComments(newComments);
    }
    useEffect(()=>{
        console.log("useEffect Called...")
        //console.log(comments)
        console.log(name)
    },[name]);
    return ( 
        <div>
            <CommentsListDemo comments={comments} handleDelete={handleDelete}/>
            <button onClick={()=>setName('Singh')}>Change Name</button>
        </div>
     );
}
 
export default ListKeysDemo;
