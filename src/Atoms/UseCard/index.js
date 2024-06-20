

const UserCard=({image,fullName,age,gender,address}) =>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/> 
            <h2>
               {fullName}
            </h2>
            <h3> {age}</h3>
            <h3> {gender}</h3>
            <h3> {address} </h3>
        </div>
        
    )
}
export default UserCard ;