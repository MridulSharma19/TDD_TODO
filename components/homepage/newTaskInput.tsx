import AddButton from "./addbutton";

const NewTaskInput = () => {
    const handleClick = () => {};
    return (
        <div>
            <div>
                <label htmlFor="newTask">New Task</label>
                <input type="text" id="newTask" name="newTask" placeholder="New Task" />
            </div>
            <AddButton text="Add Task" handleClick={handleClick} />
        </div>
    );
};

export default NewTaskInput;
