import { InputBox } from "./InputBox";
import { DisplayTask } from "./DisplayTask";
import { useState , useEffect } from "react";


export function HomePage(){
    const [task , setTask] = useState({name :"" , completed :false});
    const [type , setType] = useState(1);
    const [completedTask , setCompletedTask] = useState([]);
    const [activeTask , setActiveTask] = useState([]);
    const [taskArr , setTaskArr] = useState([]);

    const addingTask = (event) => {
        let taskName = event.target.value;
        setTask({...task , name : taskName});
    }

    const changeCompleted = (index) => {
        setTaskArr(tasks => 
            tasks.map((task , i) => 
                index===i 
                ? {...task ,completed: !task.completed} 
                : task
            )
        )
    }

    const showActiveTask = () => {
        if(type===1 || type===2){
            setType(3)
        }
        setActiveTask(taskArr.filter((task) => !task.completed));
    }
    
    const showCompletedTask = () => {
        if(type===1 || type===3){
            setType(2)
        }
        setCompletedTask(taskArr.filter((task) => task.completed));
    }

    const showAll = () => {
        if(type===2 || type===3){
            setType(1)
        }
    }

    const clearCompletedTask = () => {
        setTaskArr(taskArr.filter((task) => !task.completed))
    }

    useEffect(() => {
        console.log("Active Task:",activeTask);
    },[activeTask])

    useEffect(() => {
        console.log("completed Task :",completedTask)
    },[completedTask])

    const pressAddButton = () => {
        if(task.name.trim() !== ""){
            if(taskArr.find(taskA => taskA.name===task.name)){
                alert("Task already exist")
                setTask({name :"" , completed :false});
            }else{
                setTaskArr(taskArr => [...taskArr,task]);
                setTask({name :"" , completed :false});
            }
        }else{
            alert("Enter a task first");
            setTask({name :"" , completed :false});
        }
    }

    useEffect( () => {
        console.log(taskArr)
    },[taskArr])

    useEffect(() => {
        console.log(task);
    },[task])
    return(
        <div className="mainContainer">
            <div className="text-container">
                <p className="text">Todo App</p>
            </div>

            <InputBox addingTask={addingTask} task={task} pressAddButton={pressAddButton}/>
            
            <DisplayTask taskArr={taskArr} completedTask={completedTask} changeCompleted={changeCompleted} activeTask={activeTask} type={type}/>

            
            <div className="main-button-container">
                <div className="first-button-container">
                    <p className="total-task">{taskArr.length} Task left </p>
                    <button className="all-button" onClick={showAll}>All</button>
                    <button className="active-button" onClick={showActiveTask}>Active</button>
                    <button className="completed-button" onClick={showCompletedTask}>Completed</button>
                </div>
                <div className="second-button-container">
                    <button className="clear-button" onClick={clearCompletedTask}>Clear Completed</button>
                </div>
            </div>
        </div>
    );
}