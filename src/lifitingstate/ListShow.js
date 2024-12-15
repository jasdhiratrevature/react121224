const ListShow = ({list}) => {
    return (
        <div>
           <h3>{list.length > 0 ? 
            list.map((item) => (<li key={item}>{item}</li>)) : null}</h3>
        </div>
    );
}
 
export default ListShow;