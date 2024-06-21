import './index.css';
import  useGetusers  from "./hooks/useGetUsers";
import UserCard from "../Atoms/UseCard";

const Users=()=>{
    const {users,error,loading}=useGetusers();
    console.log({users});
return(
    
    <div className="users-page">
        {loading && <h2>Loading users ...</h2>}
        {error.length>0 && <h2>{error}</h2>}
        {users.length>0 ? users.map((user)=>(
                <UserCard
                 key={user.id}
                image={user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                age={user.age}
                gender={user.gender}
                address={user.email}/>
            )): !loading && <h2>No users found</h2>}
    </div>
    
    )
}
export default Users;