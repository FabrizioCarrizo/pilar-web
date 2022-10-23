import { Card, Button } from "@mui/material";
import React from "react";
import Header from "../layout/layoutElements/Header";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { ListAlt, Task } from "@mui/icons-material";

function fetchListCard() {

  return (
    <Link to={'/fetchlist'} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <ListAlt size='large'></ListAlt>
        <CardContent>
          <Typography variant="h4" color="text.primary">
            Fetchlist
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Manage your entries of a FetchList
          </Typography>
        </CardContent>

      </Card>
    </Link>

  );
}

function todoCard() {

  return (
    <Link to={'/todo'} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <Task size='large'></Task>
        <CardContent>
          <Typography variant="h4" color="text.primary">
            Todo List
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Create and manage your tasks

          </Typography>
        </CardContent>

      </Card>
    </Link>

  );
}



const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div className="card-container">
        {fetchListCard()}
      </div>
      <div className="card-container">
        {todoCard()}
      </div>

    </div>
  );
};

export default Dashboard;
