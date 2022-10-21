import { Card, Button } from "@mui/material";
import React from "react";
import Header from "../layout/layoutElements/Header";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <Card>
        <div>Todo</div>

        <Button variant="contained"> Button</Button>
      </Card>
      <Card>
        <div>Fetch List</div>

        <Button variant="contained"> Button</Button>
      </Card>
    </div>
  );
};

export default Dashboard;
