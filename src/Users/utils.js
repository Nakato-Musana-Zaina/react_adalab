const baseUrl = process.env.REACT_APP_BASE_URL;
export const getusers = async()=> {
    try{
        const response = await fetch(`${baseUrl}/users`)
        return response.json()
    }
    catch(error){
        throw new Error(error.message)
    }
}
