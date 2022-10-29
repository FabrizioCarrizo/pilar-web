import React, {useRef} from 'react';
import TodosContainer from '../../components/containers/TodoContainer';
import TodoFormContainer from '../../components/containers/TodoFormContainer';
import Filteroptions from '../../components/pure/FilterOptions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../layout/layoutElements/Header';
import TodoCountContainer from '../../components/containers/TodoCountContainer';

export default function   ImgMediaCard() {
  return (
    <div >
      <Header></Header>
      <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Todo List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can add or remove tasks, or mark them as completed
            </Typography>
          </CardContent>

        </Card>
      </div>
      <TodoFormContainer></TodoFormContainer>
      <TodosContainer></TodosContainer>
      <Filteroptions></Filteroptions>
    </div>

  );
}
