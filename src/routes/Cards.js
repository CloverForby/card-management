import { useEffect, useState } from "react"
import Card from "../component/Card"
import { Link } from "react-router-dom"
import { GetCards } from "../services/api"

export default function CardsPage(){
    const [data, setData] = useState(null)

    useEffect(()=>{
        GetCards().then(res=> res.json())
        .then(result => {
            setData(result)
        })
        .catch(err => console.error(err))
    },[])


    return <>
    
    <h2>Cards</h2>
    <Link to="/cards/new" className="button" style={{float: 'right'}}>Add Card</Link>
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
        {data != null ? data.map(Card) : ''}
    </div>
    
    </>
}