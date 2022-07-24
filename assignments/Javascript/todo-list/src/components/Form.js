import React, { useState } from 'react'; 

const Form = (props)=>{
    const [todoList, setTodoList] = useState([]); 
    const [task, setTask] = useState(""); 

    const submitHandler =(e)=>{
        e.preventDefault(); 

        //used to not have an empty object//cannot add empty task
        if (task.length === 0){
            return 
        }
        const taskItem = {
            text: task, 
            complete: false
        }
        setTodoList([...todoList, taskItem]); 
    }

    const deleteTask =(delIndex) =>{
        const filteredTodos = todoList.filter((task, index)=>{
            return index !== delIndex; 
        }); 
        setTodoList(filteredTodos); 
    }
    const handleCompletedTask=(complIndex) => {
        const completedTasks = todoList.map((task, index) =>{
            if (complIndex ===index){
                const completedTasks= {...task, complete: !task.complete}; 
                return completedTasks; 
            }
            return todoList; 
        }); 
        setTodoList(completedTasks); 
    }

    return(
        <div>
            <form onSubmit ={ submitHandler }>
                <label>New Task</label>
                <input type= "text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <input type ="submit" value="Add"></input>
            </form>
            <div>
                {
                    todoList.map((task, index)=>{
                        const taskClasses = ["italic"]; 
                        if (task.complete){
                            taskClasses.push("line-through"); 
                        }
                        return(
                            <div>
                                <input checked={task.complete} type="checkbox" onChange={(e)=>{handleCompletedTask(index);}}/>
                                <span className ={taskClasses.join(" ")}>{task.text}</span>
                                <button onClick ={(e)=>{deleteTask(index) }}>Delete</button>
                            </div>
                        ); 
                    })
                }
            </div>
        </div>
    ); 
}
export default Form; 