import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddCard } from "../services/api";

export default function AddPage(){
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null)

    const navigate = useNavigate();


    function HandleSubmit(e){
        e.preventDefault();
        AddCard(title,image)
        .then(res => res.json())
        .then(data => {
            console.log("Added:", data)
            navigate("/cards");
        })
        .catch(err => console.error(err));


    }


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
            <input type="submit" value="Submit" className="button"/>
        </form>
    </>
}