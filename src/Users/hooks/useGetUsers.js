import { getusers } from "../utils"
import { useEffect, useState } from "react"

export const useGetUsers = ()=>{
    const [users,setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);


    useEffect(()=> {
        const fetchUsers = async()=>{
            try{
                setloading(true);
                const result = await getusers();
                console.log({result});

                setUsers(result.users);
                setloading(false);
                

            }
            catch(error){
                setError(`Error: ${error.message}`)
                setloading(false);
            }
        };
        fetchUsers();
    }, []);

    return{users,error,loading}
};