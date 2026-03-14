export function InputBox({addingTask ,task, pressAddButton}){

    return(
        <div className="inputBox-container">
            <input type="text" onChange={addingTask} className="text-box" value={task.name} placeholder="Add a new Task..."/>
            <button className="text-box-button" onClick={pressAddButton}>Add</button>
        </div>
    );
}