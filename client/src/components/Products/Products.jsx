import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWines, setWineClean, setFilter, getWineName, getStrains,allFavs2 } from '../../redux/actions/actions';
// import { CardProduct } from '../CardProduct/CardProduct';
// import { Container } from '@mui/system';
import {SearchBar} from '../SearchBar/SearchBar'
import { ProductsPagination } from '../Pagination/ProductsPagination';
import style from '../Products/Products.module.css'
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';


import Offers from '../Products/Offers'


import { CardProductPrincipal } from '../CardProduct/CardProductPrincipal';
import { useNavigate } from 'react-router-dom';




export const Products = () => {
    const navigate= useNavigate(); 
    const dispatch = useDispatch();
    let wines = useSelector((state) => state.wines);
    let allProducers = useSelector((state) => state.allProducers);
    let categoryR = useSelector((state) => state.category);
    let ordenR = useSelector((state) => state.orden);
    let producerR = useSelector((state) => state.producer);

    let store = JSON.parse(localStorage.getItem('user'))    

    const [page,setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const[category,setCategory] = useState(categoryR);
    const[orden,setOrden] = useState(ordenR);
    const[producer,setProducer] = useState(producerR);

    let wines_paginates = [];

    //SEARCH BAR
    const handleSearch = (value) =>{
        dispatch(getWineName(value))
        setPage(1)
    }

    const handleOffer = () =>{
      navigate('/Offers')
    }

    //reload
    const HandleReload = () => {
        window.location.reload();
      };

    //Filter Config
    useEffect(()=>{
        dispatch(setWineClean());
        let op ={};
        op = {category, orden, producer};
        dispatch(setFilter(op));
        dispatch(getStrains());

        //if(page === 1) dispatch(getWines(0,category,orden,producer));
        dispatch(getWines(category,orden,producer));
        
        if(store?.user?.uid) dispatch(allFavs2(store.user.uid))
      

    },[dispatch,categoryR,category,orden,producer])

    //Total pages
    useEffect(()=>{
        let num = Math.ceil((wines?.total / 9))
        if(typeof num === 'number') setTotalPage(num)
        
    },[wines?.total])

    //Pagination
    if(wines?.result?.length){
        for (let i = (page * 9) - 9; i < page*9; i++) {
            if(wines?.result[i] !== undefined) wines_paginates.push(wines?.result[i])
        }
    }

  
  return (
    <div>
      {Object.keys(wines).length === 0 ? (
        <svg className={style.svg} viewBox="25 25 50 50">
          <circle className={style.circle} r="20" cy="50" cx="50"></circle>
        </svg>
      ) : store?.user && localStorage.getItem("favorites")?.length === 0 ? (
        <svg className={style.svg} viewBox="25 25 50 50">
          <circle className={style.circle} r="20" cy="50" cx="50"></circle>
        </svg>
      ) : (
        <div className={style.mainContainer}>
          <div onClick={handleOffer} className={style.banner}>
            <span></span>
          </div>

          <aside className={style.sidebarFilters}>
            <div className={style.card}>
              <div className={style.search}>
                
                <SearchBar onSearch={handleSearch} />
                
              </div>
              <div className={style.search}>
                <select
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                >
                  <option value="">PRECIO</option>
                  <option value="pricemax">Max⬆</option>
                  <option value="pricemin">Min⬇</option>
                </select>
              </div>

              <div className={style.search}>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">CATEGORIA</option>
                  <option value="TINTO">Tinto</option>
                  <option value="BLANCO">Blanco</option>
                  <option value="ROSADO">Rose</option>
                  <option value="ESPUMANTE">Espumante</option>
                </select>
              </div>

              <div className={style.search}>
                <select
                  value={producer}
                  onChange={(e) => setProducer(e.target.value)}
                >
                  <option value="">PRODUCTOR</option>
                  {allProducers?.producer?.map((produ) => (
                    <option key={produ} value={produ}>
                      {produ}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.search}>
                <select
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                >
                  <option value="">ALFABETO</option>
                  <option value="abc">A-Z</option>
                  <option value="cba">Z-A</option>
                </select>
              </div>
              <div className={style.search}>
                <Button   size="small" variant="contained" onClick={HandleReload}>
                  Recargar <RefreshIcon sx={{ ml: "5px" }} />
                </Button>
              </div>
            </div>
          </aside>

          {wines?.msg ? (
            <div className={style.containerMsg}>
              <h2>{wines.msg}</h2>
            </div>
          ) : (
            <>
              <main className={style.containerCards}>
                {wines?.result?.length !== 0 &&
                  wines_paginates.map((wine) => (
                    <div key={wine._id} className={style.content}>
                      <CardProductPrincipal
                        stock={wine.stock}
                        id={wine._id}
                        name={wine.name}
                        year={wine.year}
                        strain={wine.strain}
                        producer={wine.producer}
                        country={wine.producer}
                        discount={wine.discount}
                        price={Math.round(
                          (wine.price * (100 - wine.discount)) / 100
                        )}
                        img={wine.img}
                        category={wine.category.name}
                        description={wine.description}
                      />
                    </div>
                  ))}
              </main>
              <div className={style.pagination}>
                <ProductsPagination
                  setPage={setPage}
                  page={page}
                  totalPage={totalPage}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
