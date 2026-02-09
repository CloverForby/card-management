import { Link } from "react-router-dom";

export default function Card(info){
    return (<div key={info.id}>
                <div style={{display: "flex", alignItems: 'flex-end'}}>
                    <h3 >{info.card_name}</h3>
                    <Link style={{marginBottom: '1.3em', marginLeft: '1em'}} 
                    to={`/cards/${info.id}/edit`}
                    state={info}
                    >Edit</Link>
                </div>
                
                <img style={{width: '15em'}} src={info.card_pic} />
                
            </div>)
}