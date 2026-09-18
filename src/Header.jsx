import { AppBar, Toolbar,Button,Typography,Stack } from "@mui/material"
import { Link } from "react-router-dom"
export default function Header(){
return(
    <AppBar sx={{background:"#8bc34a",width:"100vw"
    ,position:"absolute",top:"0",marginBottom:"50px"}}>
        <Toolbar sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<Typography variant="h6" sx={{fontFamily:"'Poppins',sans-serif"
    ,fontWeight:"bold",fontSize:"25px"}}>
    Api Blog
</Typography>
        <Stack direction="row" spacing={2}>
            <Link to={"./"}>
            <Button color="inherit" sx={{
            fontFamily:"'Poppins',sans-serif",fontWeight:'bold',fontSize:"21",
            padding:"10px 20px",borderRadius:"8px",transition:"background-color 0.3s",
            "&:hover":{
                backgroundColor:"lightgreen",color:"black"
            }}}>
                الرئيسية</Button>
            </Link>
            <Link to={"./add"}>
            <Button color="inherit" sx={{
            fontFamily:"'Poppins',sans-serif",fontWeight:'bold',fontSize:"21",
            padding:"10px 20px",borderRadius:"8px",transition:"background-color 0.3s",
            "&:hover":{
                backgroundColor:"lightgreen",color:"black"
            }}}>إضافة</Button>
            </Link>
        </Stack>
                </Toolbar>
    </AppBar>
)
}