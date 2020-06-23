import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import Box from './Box';

class Todo extends Component {
  
 render() {
  return(
      <Container disableGutters='true'>
        <AppBar position="static" style={{background: '#FE6B8B'}}>
            <Toolbar>
                <Typography variant="h5"> Todo App </Typography>
            </Toolbar>
        </AppBar>
          <Box/>
          <Typography variant="h4" style={{margin:'250px 0px 250px 120px'}}>The Task Manager
          <Typography> Manage all your task at one place and be productive</Typography>
          </Typography>
      </Container>
    )
   }
 }


Todo.propTypes = {}
export default Todo