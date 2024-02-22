import axios from "axios"


const createticketservice = async(formdata,token) => {
    const response = await axios.post("https://supportdeskbackend-o50j.onrender.com/api/ticket", formdata,{
        headers: {
          'Authorization': 'Bearer ' + token ,
          "content-type": "multipart/form-data",
        }
      })
    const data = response.data
return data

}

const getallticketservice = async(token) => {
    const response = await axios.get("https://supportdeskbackend-o50j.onrender.com/api/ticket",{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })

    const data = response.data
return data
}
const getsingleticketservice = async(id,token) => {
    const response = await axios.get(`https://supportdeskbackend-o50j.onrender.com/api/ticket/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })

    const data = response.data
return data
}

const updateticketservice = async(id, formdata,token) => {
    const response = await axios.put(`https://supportdeskbackend-o50j.onrender.com/api/ticket/${id}`, formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
    const data = response.data
return data
}

const createnoteservice = async(formdata,token) => {
   
    const response = await axios.post("https://supportdeskbackend-o50j.onrender.com/api/note",formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
    const data = response.data
return data
}
const getallnoteservice = async(ticketid,token) => {
   
    const response = await axios.get(`https://supportdeskbackend-o50j.onrender.com/api/note/${ticketid}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
    const data = response.data
return data
}


const ticketservice = {
    createticketservice, getallticketservice, updateticketservice,getsingleticketservice,getallnoteservice,createnoteservice
}

export default ticketservice;