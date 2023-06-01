const AddToDos = (props) => {
  return (
    <div className="addtodos">
      <input type="text" />
      <button
        onClick={() => {
          const inputToDo = document.querySelector("input").value;
          console.log(inputToDo);
          props.todo.push(inputToDo);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddToDos;
