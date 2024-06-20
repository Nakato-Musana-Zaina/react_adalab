import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UseCard";
import './index.css';

const Users = ()=>{
    const {users,error,loading} = useGetUsers()
console.log(users)




    return(
        <div className="display"> 
            {loading && <h2> Login users ......</h2>}
            {error.length>0 && <h2> {error}</h2>}
            {users.length>0 ? users.map((users)=> (
                <UserCard
                key={users.id}
                image = {users.image}
                fullName = {`${users.firstName} ${users.lastName}`}
                age = {users.age}
                gender = {users.gender}
                address = {users.email}
                />
            )): !loading && <h2> No users Found </h2>
        }
        </div>
    )
}
export default Users