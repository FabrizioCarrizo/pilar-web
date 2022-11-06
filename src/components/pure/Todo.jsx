import { React } from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import {Delete } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const Todo = ({
  onClick,
  completed,
  text,
  id,
  deleteTodo,
}) => {
  return (
    <List
      key={id}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",

        backgroundColor: completed ? "#3dae2b" : null,
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "white" : "inherit",
      }}
    >
      <FormControlLabel
        style={{ width: "100%" }}
        control={
          <Checkbox
            onClick={onClick}
            checked={completed}
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "#57fa3d",
              },
            }}
          />
        }
        label={text}
      />
      <Delete onClick={() => deleteTodo(id)} className={'trash'} ></Delete>
      
    </List>
  );
};

Todo.propTypes = {
  // onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
