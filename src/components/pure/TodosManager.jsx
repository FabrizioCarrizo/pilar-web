import { Card, Button } from "@mui/material";
import React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Task } from "@mui/icons-material";

const TodosManager = ({ todos }) => {
  let completedTasks,
    pendingTasks = [];

  completedTasks = todos.filter((todo) => todo.completed);

  pendingTasks = todos.filter((todo) => !todo.completed);

  return (
    <div className="todos-manager">
      <div className="card-container">
        <Card>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {pendingTasks.length} Pending tasks over {todos.length}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="card-container">
        <Card>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {completedTasks.length} Completed tasks over {todos.length}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TodosManager;
