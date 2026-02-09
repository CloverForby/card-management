import { useEffect, useState } from "react"
import Card from "../component/Card"
import { Link, useNavigate } from "react-router-dom"
import { GetCards } from "../services/api"

export default function CardsPage(){
    const [data, setData] = useState(null)
    const [isLoggedIn, setLogged] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        GetCards().then(res=> res.json())
        .then(result => {
            setData(result)
        })
        .catch(err => console.error(err))
        const token = localStorage.getItem("token");
        if (token != null) setLogged(true)

    },[navigate])

    return <>
    
    <h2>Cards</h2>
    {isLoggedIn ? <Link to="/cards/new" className="button" style={{float: 'right'}}>Add Card</Link> : ''}
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
        {data != null ? data.map(Card) : ''}
    </div>
    
    </>
}