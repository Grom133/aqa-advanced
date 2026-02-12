async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
}

async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
}

async function runRequests() {
    try {
        const allResult = await Promise.all([fetchTodo(), fetchUser()]);
        console.log("Promise.all with async/await:");
        console.log(allResult);

        const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Promise.race with async/await:");
        console.log(raceResult);
    } catch (error) {
        console.log("Error:", error);
    }
}

runRequests();
