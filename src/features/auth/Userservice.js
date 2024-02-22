import axios from "axios";

const loginservice = async (formdata)=>{
        const response = await axios.post("https://supportdeskbackend-o50j.onrender.com/profile/login", formdata)
        if(response.data.isadmin){
                return
        }
        localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
}

const registerservice = async (formdata) => {
        const response = await axios.post("https://supportdeskbackend-o50j.onrender.com/api/profile/register", formdata)
        if(response.data.isadmin){
                return
        }
        localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
  
}
const authService = {
    loginservice,
    registerservice
}

export default authService