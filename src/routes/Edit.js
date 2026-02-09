import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DeleteCard, EditCard } from "../services/api";
export default function EditPage(){
    const { state } = useLocation();
    const [id, setId] = useState(state.id);
    const [title, setTitle] = useState(state.card_name);
    const [image, setImage] = useState(state.card_pic)

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
        }, [navigate]);

    function HandleSubmit(e){
        e.preventDefault();
        EditCard(id, title,image)
        .then(res => res.json())
        .then(data => {
            console.log("Updated:", data);
        })
        .catch(err => console.error(err));

        navigate("/cards");
    }

    function handleDelete() {
        DeleteCard(id)
        navigate("/cards");
    }



    console.log(title)
    return <>
        <h2>Edit Card</h2>
        <form onSubmit={HandleSubmit}>
            <label for='TitleInput'>Title</label>
            <br></br>
            <input type="text" id='TitleInput' value={title} name="TitleInput" onChange={({target}) => setTitle(target.value)}></input>
            <br></br>
            <label for='ImageInput'>Image</label>
            <br></br>
            <input type="text" id='ImageInput' value={image} name="ImageInput"onChange={({target}) => setImage(target.value)}></input>
            <br></br>
            <button className="redbutton" onClick={handleDelete} type="button">Delete</button>
            <input type="submit" value="Submit" className="button"/>
        </form>
    </>
}