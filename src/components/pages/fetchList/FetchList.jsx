import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '../layout/layoutElements/Header';

export default function ImgMediaCard() {
  return (
    <div >
      <Header></Header>
      <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Fetchlist
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage the data that is missing and needs to be acquired
            </Typography>
          </CardContent>

        </Card>
      </div>

    </div>

  );
}
