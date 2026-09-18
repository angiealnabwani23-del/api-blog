import { useState,useEffect } from "react"
import { Typography,Card,Button,CardContent,Grid,Stack,CircularProgress,CardMedia } from "@mui/material"
import axios from "axios"
import { Edit,Delete } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
export default function Home(){
    const [posts,setPosts]=useState([])
    const getPosts= async()=>{
    const res = await axios.get("http://localhost:3000/blogs")
    setPosts(res.data)
}
useEffect(()=>{
    getPosts()
},[])

const handleDelet = async(id)=>{
await axios.delete(`http://localhost:3000/blogs/${id}`)
  setPosts(posts.filter((post)=>post.id !== id))
}

return(
<div style={{width:"100%",marginBottom:"50px"}}>
<div style={{display:"flex",justifyContent:"center"}}>
<Typography sx={{
    marginTop:"50px",fontFamily:"'Poppins',sana-serif",
    fontWeight:"bold",marginBottom:"50px",
    textAlign:"center",color:"#212121",
    fontSize:"40px"
}}>
    قائمة المدونات
</Typography>
<Button variant="contained" color="success" sx={{
    mt:16,
    fontSize:'20px',
    position:"absolute",left:"50%",transform:"translate(-50%)",
    padding:"20px",
    borderRadius:"12px",
    boxShadow:"0px 6px 20px rgba(0,0,0,0.15)",
    fontWeight:"bold",
    transition:"all 0.3s",
    backgroundColor:"#8bc34a",
    marginBottom:"60px",
    "&:hover":{
        backgroundColor:"#45a049"
    }

}}
 component={Link} to="/add">أضف مدونة جديدة</Button>
</div>
<div style={{marginTop:"100px"}}>
    <Grid  container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
{posts.map((post)=>{
    return(
    <Grid 
    key={post.id}
    xs={12}
        size={{
        xs: 12,
        sm: posts.length <= 2 ? 12 : 6,
        md: posts.length <= 2 ? 12 : 6,
        lg: posts.length <= 2 ? 12 : 6
    }}
    >
        <Card>
{post.href &&(
    <CardMedia component="img" 
    height="300px"  src={post.href} alt={post.title}/>
)}
<CardContent>
<Typography variant="h6">{post.title}</Typography>
<Typography variant="h6">{post.content}</Typography>
    </CardContent>
    <Stack direction="row" spacing={1} 
    mt={2}  style={{display:"flex" ,justifyContent:"center" ,marginBottom:"20px"}}>
       <Link to={`/edit/${post.id}`}>
        <Button
        variant="outlined"
        sx={{
            fontFamily:"'Poppnis' ,sans-serif",
            fontSize:"17px",
            fontWeight:"bold",
            padding:"10px 20px",
            borderRadius:"8px",
            transition:"background-color 0.3s",
            background:"lightgreen",
            "&:hover":{
                backgroundColor:"red",
                color:"black"
            }
        }}
        startIcon={<Edit/>}
        >تعديل</Button>
        </Link>
        <Button
                variant="outlined"
        sx={{
            fontFamily:"'Poppnis' ,sans-serif",
            fontSize:"17px",
            fontWeight:"bold",
            padding:"10px 20px",
            borderRadius:"8px",
            transition:"background-color 0.3s",
            background:"lightgreen",
            "&:hover":{
                backgroundColor:"red",
                color:"black"
            }
        }}
        onClick={()=>{handleDelet(post.id)}}
        startIcon={<Delete/>}
        >حذف</Button>
    </Stack>
    </Card>
    </
    Grid>
    )
})

}
    </Grid>

</div>
</div>
)
}  