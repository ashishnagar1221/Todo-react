import React from 'react'
import { ListItemIcon,Typography, Grid,Checkbox,Card, Button,List,ListItem,ListItemText,TextField } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import { useState,useEffect } from 'react';

const Box = (props) => {

  const [task,setTask] = useState([{"name":"Buy Groceries","done":true},{"name":"Call Hyden","done":false}])
  const [newTask,setNewTask] = useState({})

  const markDone = (x) =>{
    const eleIndex = task.findIndex(ele => ele.name === x.ele.name)
    let newArray = task
    newArray[eleIndex] = {...newArray[eleIndex],done:!newArray[eleIndex].done}
    setTask(newArray)
  }
  
  const submit = () => {
    setTask(prev => [...prev,newTask])
  }

  const clearList = () => {
     setTask([])
  }

  const deleteOne = (x) => {
    let newArray = task.filter(e => e !== x)
    setTask(newArray)
  }
  
  return(
        <Card elevation={10} style ={{ width:'35%',height:'500px',float:'right',margin:'25px 10% 0px 0px'}}>
        <Grid style ={{height:'15%',padding:'5% 8% 0px 8%'}}>
            <Grid>
            <Typography variant="h6" style={{float:"left",fontFamily:"'Inter',sans-serif"}}> To-Do List </Typography>
              <Button 
              variant="contained" size="small" 
              style={{float:"right",fontFamily:"'Inter',sans-serif",backgroundColor: '#000000',color:'#ffffff'}}
              onClick = {() => clearList()}
              >
                Clear List
              </Button>
            </Grid>
        </Grid>
        <Grid style ={{height:'60%',padding:'0px 8%'}}>
        <div style={{width: '100%',height: '400', maxHeight:'100%', overflow: 'auto'}}>
          <List component="nav">
          {
            task.map((ele,index) =>{
              return(
                <ListItem key={index} style={{margin:'0px',padding:'0px'}}>
              <ListItemIcon>
                <Checkbox defaultChecked = {ele.done}  onChange={() => markDone({ele})}/>
              </ListItemIcon>
              <ListItemText primary={ele.name} />
              <Button onClick={() => deleteOne(ele)} ><ClearIcon/></Button>
            </ListItem>   
              )
            })
          }       
          </List>
          </div>
        </Grid>
        <Grid style ={{height:'15%',padding:'0px 8%'}}>
         Create new task
          
            <TextField 
            style ={{width:'75%'}}
            id="outlined-basic" 
            placeholder="Write Task..." 
            variant="outlined" 
            onChange={(e) =>setNewTask({"name":e.target.value,"done":false})} 
            />
            <Button 
            style ={{padding:'15px',width:'15%',float:"right",fontFamily:"'Inter',sans-serif",backgroundColor: '#000000',color:'#ffffff'}}
            onClick={() =>submit()}
            >
              +
            </Button>
        </Grid>
        </Card>
   )

 }

export default Box