function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

loadData();

function displayUsers(users) {
    // console.log(users);
    const userDiv = document.getElementById('users');
    for (const user of users){
        // console.log(user.website);
        const Div = document.createElement('div');
        Div.classList.add('user')
        Div.innerHTML=`
        <h2>Name: ${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
        <p>User's Name: ${user.username} Website: ${user.website}</p>`

        userDiv.appendChild(Div)
    }
}