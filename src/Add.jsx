import { TextField, Button,Typography,Stack,Alert } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"

export default function Add(){
   const [title,setTitle]=useState("")
   const [content,setContent]=useState("")
   const [href,setHref]=useState("")
   const navigate=useNavigate()
const handleSubmit=async (e) =>{
   e.preventDefault()
     if(title === "" || content === "" || href === ""){
            alert("الرجاء ملئ الحقول")
            return;

        }
await axios.post("http://localhost:3000/blogs",{title,content,href})
   setTitle("")
   setContent("")
   setHref("")
       setTimeout(()=>{
        navigate("/")
    },1000)

}
   return(
<div  style={{marginTop:'15%',marginLeft:"10%"}}>
<Typography variant="h4" gutterBottom>أضف مدونة جديدة</Typography>
<form onSubmit={handleSubmit}>
   <Stack spacing={2}>
<TextField label="العنوان" value={title} onChange={(e)=>{setTitle(e.target.value)}}></TextField>
<TextField label="المحتوى" value={content} rows={4} multiline onChange={(e)=>{setContent(e.target.value)}}></TextField>
<TextField label="أضف رابط الصورة" value={href} onChange={(e)=>{setHref(e.target.value)}}></TextField>
<Button type="submit" variant="contained">Save</Button>
</Stack>
</form>
</div>

   ) 
}