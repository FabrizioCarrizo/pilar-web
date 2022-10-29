import { React, useState } from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ onClick, completed, text, id, increasePending, increaseCompleted, deleteTodo }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck=()=>{
    setChecked(!checked);
    if(checked){increasePending(1)} else{increaseCompleted(1)}
  }
  return (
    <List
      key={id}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",

        backgroundColor: checked ? "green" : null,
        textDecoration: checked ? "line-through" : "none",
      }}
    >
      <FormControlLabel
      style={{width:'100%'}}
        control={
          <Checkbox
            checked={checked}
            onChange={() => {
              onClick();
              handleCheck();
              
            }}
            sx={{
              color: "blue",
              "&.Mui-checked": {
                color: "blue",
              },
            }}
          />
        }
        label={text}
      />
      <Delete onClick={()=>deleteTodo(id)}></Delete>
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
