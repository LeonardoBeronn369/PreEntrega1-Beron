import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={item.onAdd}/>
        </div>
    )
}