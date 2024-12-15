const ListCount = ({list}) => {
    return ( 
        <div>
        {list && <div>Total count : {list.length} </div>} 
        </div>
     );
}
 
export default ListCount;