import React, {useEffect} from 'react';
import style from './CardProduct.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../redux/actions/actions';

export const CardProduct = ({id, name, price, img, category, year, description, strain, producer, country}) => {
    const dispatch = useDispatch();
    let store = JSON.parse(localStorage.getItem('user'))
    const handleFavs = ()=>{
      // console.log("hola")
      const input={
        id: id,
        name: name,
        price: price,
        img: img,
        category: category,
        year: year,
        description: description,
        strain: strain,
        producer: producer,
        country: country
      }
      // console.log(input)
      dispatch(addFavorites(input))
    }

    const handleClickShopping = (id)=>{
        let state = JSON.parse(localStorage.getItem('ShoppingCar'));
        let sum = 0;
        let index = undefined;
    
        if(localStorage.id){
          console.log('asd')
        }
        if(state){
          for(let i=0 ; i<state?.length ; i++){
            if(state[i].id === id){
              sum = state[i].cont + 1;
              index = i; 
            }
          }
    
          if(sum) state?.push({id,cont:sum,name,price,img,category});
          else state?.push({id,cont:1,name,price,img,category});
    
          if(index !== undefined) state.splice(index,1);
    
          localStorage.setItem('ShoppingCar', JSON.stringify(state));
        }
        else localStorage.setItem('ShoppingCar', JSON.stringify([{id,cont:1,name,price,img,category}]));
        //localStorage.clear()
      }

  return (
    /*  name, year, description, img, strain, producer,  ID  de category, price, country */
    <div className={style.card}>
            <Link to={`/cardDetail/${id}`} style={{textDecoration:'none', color:'black'}}>
                <img className={style.cardImg} src={img} alt={name}/>
                <div className={style.cardInfo}>
                    <p className={style.textTitle}>{name}</p>
                    <p className={style.textBody}>{category}</p>
                </div>
            </Link>
            <div className={style.cardFooter}>
                <span className={style.textTitle}>${price}.00</span>
                {store && store.user.role && <div className={style.cardButton}>
                    <FavoriteBorderIcon className={style.svgIcon} onClick={()=>handleFavs(name, year, description, img, strain, producer, id, price, country)}/>
                </div>}
                <div className={style.cardButton}>
                    <AddShoppingCartIcon className={style.svgIcon} onClick={()=>handleClickShopping(id)}/>
                </div>
            </div>
        
    </div>
    
  )
}
