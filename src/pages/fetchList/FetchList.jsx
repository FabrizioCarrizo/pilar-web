import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '../layout/layoutElements/Header';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import {appActions}
import { CardMedia, Grid } from '@mui/material';




function FetchList() {

  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    dispatch(appActions.setPageTitle("List"));
    getPokemons()
  }, [])

}

const getPokemons = async () => {
  try {
    dispatch(appActions.loading(true));
    const result = await api.GET(api.pokemons);
    if (result) {
      console.log("Pokemon: ", result);
      setPokemos(result.results);
      setNext(result.results)
    }
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(appActions.loading(false))
  }

  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="div">
        Poke List
      </Typography>
    </Grid>
  </Grid>

  pokemons && pokemons.map((p, index) => {
    return (
      <Grid items xs={4} key={index}>
        {renderItem(p)}

      </Grid>

    )
  });

  <Grid items xs={4}>
    <Card onClick={loadMore}>
      <CardContent>
        <Typography>
          Load more
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: 100, p: 2 }}
          image={POKE_IMG}
          alt="Pokemon"
        ></CardMedia>
      </CardContent>

    </Card>

  </Grid>

  const renderItem = (item) => {
    const path = item.url.split("/");
    const imgID = getPokemonImgId(path[6]);
    return (
      <Card sx={{
        display: "flex", height: 100, cursor: "pointer", "&:hover": {
          backgroundColor: "#5acdbd", color: "white"
        }
      }}>
        <CardContent>
          <Typography>
            {ImgID}
          </Typography>
          <Typography>
            {item.name}
          </Typography>
        </CardContent>
        <CardMedia component="img" sx={{ width: 100 }} src={`${IMG_URL}${imgID}.png`} alt={"Pokemon"}>

        </CardMedia>

      </Card >
    )
  }

  const getPokemonId = (id) => {
    console.log(id.length)
    switch (id.length) {
      case 1:
        return `00${id}`
      case 2:
        return `0${id}`
      default:
        return id
    }
  }

  const loadMore=async ()=>{
    try {
      dispatch(appActions.loading(true));
      const result = await api.GET(next);
      if(result){
        setPokemons(prev=>[...prev, ...result.results]);
        setNext(result.next)
      }
    } catch(error){
      console.log(error)
    } finally {
      dispatch(appActions.loading(false))
    }
  }
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
              Manage the data that is missig and needs to be acquired
            </Typography>
          </CardContent>

        </Card>
      </div>

    </div>

  );
}

export default FetchList