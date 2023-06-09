
import './App.css';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo.js";
import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App(props) {
  const taskList = props.tasks.map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  const filterList = props.filters.map((filter) => (
      <FilterButton
          id={filter.id}
          name={filter.name}
          completed={filter.completed}
          key={filter.id}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>Instructor List</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        Users
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);
