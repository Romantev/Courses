import AddToDos from "./AddToDos";
import TodoItems from "./TodoItems";
import "./TodoSection.css";

const TodoSection = () => {
  let itemArray = [
    "einkaufen",
    "schwimmen",
    "spazieren",
    "essen",
    "schlafen",
    "Klingelstreich",
  ];

  return (
    <>
      <h1>My Todos</h1>
      <section>
        <ul>
          {itemArray.map((elm, index) => (
            <TodoItems item={elm} key={index} />
          ))}
        </ul>
        <AddToDos todo={itemArray} />
      </section>
    </>
  );
};

export default TodoSection;
