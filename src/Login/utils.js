const baseUrl = process.env.REACT_APP_BASE_URL;
console.log({baseUrl});
export const login = async(username, password)=> {
    try{
        const response = await fetch(`${baseUrl}/auth/login`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(username, password),
            
        });
        return response.JSON;
        
        
    }
    catch(error){
        return `Error during login: ${error.message}`
    }
}

