function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data){
    for(const user of data){
        console.log(user.address.geo.lng);
    }
}