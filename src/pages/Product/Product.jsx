import {shoes} from '../../data/data';
import { useParams } from 'react-router-dom';
import s from './Product.module.css'


export function Product(){
    const {id} = useParams();
    const sho = shoes.find(sho=>sho.id == id);
    return(
        <>
        <div className={s.product}>
            <h2>{sho.name}</h2>
            <div className={s.info}>
                <img src={sho.img} alt="" />
                <div className={s.infoDannie}>
                    <p className={s.desc}>{sho.desc}</p>
                    <p>Осталось в наличии: {sho.count} шт</p>
                    <p className={s.price}>{sho.price} ₽</p>
                </div>
                
            </div>
            
        </div>
            
        </>
    )
}