import React from "react";


export default function Todo(props) {
  return (
    <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
            <label className="todo-label" htmlFor={props.id}>
              {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Choose <span className="visually-hidden">{props.name}</span>
            </button>
            <button type="button" className="btn btn__green">
              Follow <span className="visually-hidden">{props.name}</span>
            </button>
            <button type="button" className="btn btn__danger">
              Report <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
    </li>
  );
}