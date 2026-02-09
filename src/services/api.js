var endpoint_url = 'https://onlinecardappwebservicemelissa.onrender.com/'

function GetCards(){
    return fetch(
            `${endpoint_url}allcards`
        )
}

function DeleteCard(id){
    return fetch(`${endpoint_url}deletecard/${id}`, {
            method: "DELETE",
        });
}

function EditCard(id,title,image){
    return fetch(`${endpoint_url}updatecard/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                card_name: title,
                card_pic: image,
            }),
        })
}

function AddCard(title, image){
    return fetch(`${endpoint_url}addcard`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...authHeader(),
            },
            body: JSON.stringify({
                card_name: title,
                card_pic: image,
            }),
    })
}



function authHeader() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
}

function login(credentials) {

    return fetch(`${endpoint_url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

}

export {GetCards, DeleteCard, EditCard, AddCard, login}