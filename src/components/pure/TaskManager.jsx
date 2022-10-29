import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { increaseCompleted } from "../../store/actions/actions";
import { useSelector } from "react-redux";

let pendingTasks= useSelector(store=>store.)
const pendingCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Number of pending tasks:
      </Typography>

      <Typography variant="body2">
        Tasks
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const completedCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Number of completed tasks: {increaseCompleted().payload.increase}
      </Typography>

      <Typography variant="body2">
        Tasks
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);
const TaskManager = ({increaseCompleted,
    increasePending,}) => {


  return (
    <Box sx={{ minWidth: 150 }}>
      <Card variant="outlined">{pendingCard}</Card>
      <Card variant="outlined">{completedCard}</Card>
    </Box>
  );
};

export default TaskManager;
