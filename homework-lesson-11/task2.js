function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

const results = Promise.all([fetchTodo(), fetchUser()]);

results
    .then(([todo, user]) => {
        console.log(todo);
        console.log(user);
    })

    .catch (error => {
    console.log("Error in Promise.all:", error);
    });

const raceResult = Promise.race([fetchTodo(), fetchUser()]);

raceResult
    .then(result => {
        console.log("race result:", result);
    })