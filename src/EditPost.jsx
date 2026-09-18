import { useState ,useEffect} from "react"
import { TextField, Button,Typography,Stack} from "@mui/material"
import { useParams ,useNavigate} from "react-router-dom"
import axios from "axios"
export default function EditPost(){
const [title,setTitle]=useState("")
const [content,setContent]=useState("")
const [href,setHref]=useState("")
const navigate=useNavigate()
const {id}=useParams()
const fetchPosts= async()=>{
const waitPosts= await axios.get(`http://localhost:3000/blogs/${id}`)
setTitle(waitPosts.data.title)
setContent(waitPosts.data.content)
setHref(waitPosts.data.href)
}
useEffect(()=>{
    fetchPosts()
},[id])

const handleSubmit=async (e) =>{
   e.preventDefault()
    if(title === "" || content === "" || href === ""){
    alert("الرجاء ملئ الحقول")
    return;
        }
    await axios.put(`http://localhost:3000/blogs/${id}`,{title,content,href})
    setTimeout(()=>{
        navigate("/")
    },1000)
}
    return(
   
<div  style={{marginTop:'15%',marginLeft:"10%"}}>
<Typography variant="h4" gutterBottom>تعديل المقالة</Typography>
<form onSubmit={handleSubmit}>
<Stack spacing={2}>
<TextField label="العنوان" value={title} onChange={(e)=>{setTitle(e.target.value)}}></TextField>
<TextField label="المحتوى" value={content} rows={4} multiline onChange={(e)=>{setContent(e.target.value)}}></TextField>
<TextField label="أضف رابط الصورة" value={href} onChange={(e)=>{setHref(e.target.value)}} placeholder="https://example.com/image.jpg"></TextField>
{href && (
    <img
    src={href}
    alt={title}
style={{width:"300px",maxWidth:"400px",borderRadius:"8px"}}
/>)}
<Button type="submit" variant="contained">Save</Button>
</Stack>
</form>
</div>

 
    )
}