import PropTypes from "prop-types";
import Todo from "./Todo";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const TodoList = ({ todos, completedCount, onTodoClick, deleteTodo }) => {
  let completedTasks,
    pendingTasks = [];

  completedTasks = todos.filter((todo) => todo.completed);

  pendingTasks = todos.filter((todo) => !todo.completed);

  return (
    <Card
      variant="outlined"
      style={{
        width: "50%",
        margin: "auto",
        padding: "0 20%",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-start",
        }}
      >
        {todos.map((todo, id) => (
          <Todo
            key={id}
            {...todo} // id, text, completed
            onClick={() => onTodoClick(todo.id)}
            deleteTodo={deleteTodo}
          />
        ))}
      </CardContent>
    </Card>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
