import React from "react";
import TodosContainer from "../../components/containers/TodoContainer";
import TodoFormContainer from "../../components/containers/TodoFormContainer";
import Filteroptions from "../../components/pure/FilterOptions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Header from "../layout/layoutElements/Header";

export default function TodoPage() {
  return (
    <div>
      <Header></Header>
      <div className="dashboard-card">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              <h3>Manage your tasks</h3>
            </Typography>
            <Typography variant="body1" color="text.primary">
              Create new tasks, delete them or toggle between completed and
              pending
            </Typography>
          </CardContent>
        </Card>
      </div>
      <TodoFormContainer></TodoFormContainer>
      <TodosContainer.TodosContainer></TodosContainer.TodosContainer>

      <Filteroptions></Filteroptions>
    </div>
  );
}
