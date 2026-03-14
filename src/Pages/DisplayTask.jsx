export function DisplayTask({taskArr , changeCompleted ,type , completedTask , activeTask}){
    const getTaskType = () => {
        if(type===1){
            return taskArr;
        }
        else if(type==2){
            return completedTask;
        }
        else if(type===3){
            return activeTask;
        }
    }

    return(
        <div className="task-container">
            {getTaskType().map((task , index) =>{
                return(
                    <label key={index} className="radio-button-name">
                        <input type="checkBox" className="radio-button" />
                        <p onClick={() => changeCompleted(index)} style={task.completed?{textDecoration : "line-through"}:{textDecoration : "none"}}>{task.name}</p>
                    </label>
                );
            })}
            
            
        </div>
    );
}