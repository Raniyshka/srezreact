import { Item } from "../Item/Item";
import s from './Catalog.module.css';
import { shoes } from '../../data/data'
import { Search } from "../../components/Search/Search";
import { useState } from "react";


export function Catalog(){
    const [query,setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function handleChange(e){
        setQuery(e.target.value)
    }
    function sort(e){
        setSorting(e.target.value)
    }
    const filteredShoes = shoes.filter((sho)=>{
        return sho.name.toLowerCase().includes(query.toLocaleLowerCase()) 
        &&
        (sho.category == category || category == 0);
    })
    const sortShoes = (sorting,shoes)=>{
        switch(sorting){
            case "price_asc":
                return[...shoes].sort((a,b)=>a.price - b.price);
            case "price_desc":
                return[...shoes].sort((a,b)=>b.price-a.price);
            default:
                return shoes;
        }
    }
    const sortedFilteredShoes = sortShoes(sorting, filteredShoes);
    return(
        <>
            <h2>Каталог товаров</h2>
            <nav className={s.categories}>
                <button onClick={()=>setCategory(0)}>Все грызуны</button>
                <button onClick={()=>setCategory(1)}>Светлый окрас</button>
                <button onClick={()=>setCategory(2)}>Темный окрас</button>
            </nav>

            <div className={s.searchSort}>
                <Search handleChange={handleChange}/>

                <select onChange={sort} className={s.sort}>
                <option value="0">Выберите</option>
                <option value="price_asc">По возрастанию цены</option>
                <option value="price_desc">По убыванию цены</option>

            </select>
            </div>
            {/* <div className={s.cards}>
               <Item {...shoes}/>
            </div> */}
            <div className={s.cards}>
                {
                    sortedFilteredShoes.length ?
                    sortedFilteredShoes.map((sho)=>{
                    return(
                        <Item {...sho}/>
                    )
                })
                :
                <p>Ничего не найдено по запросу "{query}"</p>
                }   
            </div>
        </>
        
    )
}