export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button 
                onClick={() => {
                    fetch("http://localhost:3000/completed", {
                        method:"PUT",
                        headers:{
                            "content-type":"application.json"
                        }
                    })
                    .then( () => {
                        alert("Todo completed");
                    });
                }}
                >{todo.completed == true ? "completed" : "mark as completed"}</button>
            </div>
        })}
    </div>
}
