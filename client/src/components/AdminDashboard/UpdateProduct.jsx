import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getCategories, getWinesById } from "../../redux/actions/actions";
import style from './UpdateProduct.module.css';
import Button from '@mui/material/Button';
import swal from 'sweetalert';

export const UpdateProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const wine = useSelector((state)=> state.wines)
  const category = useSelector((state) => state.categories);
  const [ error, setError ] = useState({})
  const [ input, setInput ] = useState({
    name:wine?.name,
    year:wine?.year,
    description:wine?.description,
    img:wine?.img,
    category: wine?.category,
    price: wine?.price,
    country: wine?.country,
    strain: wine?.strain,
    producer:wine?.producer,
    stock: wine?.stock,
    discount: wine?.discount
  });

  useEffect(()=>{
    setInput({
      name:wine?.name,
      year:wine?.year,
      description:wine?.description,
      img:wine?.img,
      category: wine?.category,
      price: wine?.price,
      country: wine?.country,
      strain: wine?.strain,
      producer:wine?.producer,
      stock: wine?.stock,
      discount: wine?.discount
    });
  },[wine])
  
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getWinesById(id))
  }, [dispatch,setInput, id]);
 
  function handleSubmit(e){
    if(!input.category || input.year <= 0 || input.price <= 0){
      e.preventDefault()
      swal({
        title: "Error",
        text: 'Falta completar correctamente el formulario',
        icon: "error",
        button: "Aceptar",
      });
    }
    else{
      e.preventDefault()
      dispatch(updateProduct(id, input))
      swal({
        title: "Vino Modificado",
        text: `Se modifico correctamente el producto`,
        icon: "success",
        button: "Aceptar",
      });
      setInput({
        name:'',
        year:'',
        description:'',
        img:'',
        category: '',
        price: "",
        country: "",
        strain: '',
        producer:'',
        stock: '',
        discount: wine?.discount
      })
    }
  }

  function handleOnChange(e) {
    setInput((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState))
      return newState;
    });
  }


  function validate(input){
    let error = {};
    if(!input.name) error.name = 'Nombre debe ser valido'
    if(!/^[A-Z\s]+$/i.test(input.name)) error.name = 'Nombre debe ser valido'
    if(input.name.length < 3) error.name = 'Nombre debe ser valido'

    if(!/^\d*$/.test(input.stock)) error.stock = 'Stock debe ser valido'
    if(input.stock <= 0) error.stock = 'Stock debe ser valido'

    if(input.producer.length < 3){
      error.producer = 'Nombre del productor es obligatorio'
    }

    if( !/^[0-9]*(\.?)[0-9]+$/.test(input.price)) error.price = 'Precio es obligatorio'
    if(input.price <= 0) error.price = 'Debe tener precio valido'

    if(input.country.length < 3){
      error.country = 'Pais del vino es obligatorio' 
    }
    if(!/^\d*$/.test(input.year)) error.year = 'Debe ser un año valido'
    if(input.year <= 1900 || input.year > 2022) error.year = 'Debe ser un año valido'

    if(input.strain.length < 3){
      error.strain = 'Cepa es obligatorio'
    }

    return error
  }



  return (
    <div>
      
      <div className={style.form}>
      
      <form onSubmit={handleSubmit}>

      <h3> Modificar Vino </h3>
        <div>
            <label >Nombre:  </label>
            <div>
              <input  
                type="text" 
                placeholder={wine.name}
                value={input.name}
                name='name'
                autoComplete="off"
                onChange={handleOnChange}
                className={error.name && style.danger}/>
                {error.name && <p>{error.name}</p>}
              </div>   
        </div>
        <div>
            <label>Año:  </label>
            <div>
              <input 
                type="number" 
                placeholder={wine.year}
                value={input.year}
                name='year' 
                autoComplete="off"
                onChange={handleOnChange}
                min='0'
                className={error.year && style.danger}/>
              {error.year && <p>{error.year}</p>}
             </div>
        </div>  
        <div>
            <label>Cepa:  </label>
            <div>
              <input
                type="text" 
                placeholder={wine.strain}
                value={input.strain}
                name='strain'
                autoComplete="off"
                onChange={handleOnChange}
                className={error.strain && style.danger}/>
              {error.strain && <p>{error.strain}</p>}
             </div>  
        </div>
            <div>
              <label>Pais:  </label>
              <div>
              <input
                type="text" 
                placeholder={wine.country}
                value={input.country}
                name='country' 
                autoComplete="off"
                onChange={handleOnChange}
                className={error.country && style.danger}/>
              {error.country && <p>{error.country}</p>}  
            </div>
        </div>
        <div>
            <label>Productor:  </label>
            <div>
              <input 
                type="text" 
                placeholder={wine.producer}
                value={input.producer}
                name='producer' 
                autoComplete="off"
                onChange={handleOnChange}
                className={error.producer && style.danger}/>
              {error.producer && <p>{error.producer}</p>}
            </div>  
        </div>
        <div>
            <label>Link Imagen:  </label>
            <div>
              <input    
                type="text" 
                placeholder={wine.img}
                value={input.img}
                name='img' 
                autoComplete="off"
                onChange={handleOnChange}
                />
            </div>
        </div>
        <div>
            <label>Precio: </label>
            <div>
              <input      
                type="number" 
                placeholder={wine.price}
                value={input.price}
                name='price' 
                autoComplete="off"
                onChange={handleOnChange}
                min='0'
                className={error.price && style.danger}/>
              {error.price && <p>{error.price}</p>}  
            </div>
        </div>

        <div>
           <label>Stock:  </label>
           <div>
            <input       
              type="number" 
              placeholder={wine.stock}
              value={input.stock}
              name='stock' 
              autoComplete="off"
              onChange={handleOnChange}
              min='0'
              className={error.stock && style.stock}
              />
              {error.stock && <p>{error.stock}</p>}  
          </div>
          </div>
          <div>
            <label>Descuento: </label>
            <div>
              <input      
                type="number" 
                placeholder={wine?.discount}
                value={input.discount}
                name='discount' 
                autoComplete="off"
                onChange={handleOnChange}
                min='0'
                />    
            </div>
        </div>
        <div>
              <label style={{marginTop:'2em'}}> Categoria: </label>
              <select style={{marginTop:'2em'}}  name="category" onChange={e=>handleOnChange(e)} className={error.category && style.danger}>

                {category.result?.map((e) => (
                  <option value={e._id} key={e._id}> {e.name} </option>
                ))}
              </select>   
              {error.category && <p>{error.category}</p>} 
        </div>
      
        <div>
            <label style={{marginTop:'2em'}}>Descripcion:  </label>
            <textarea style={{marginTop:'2em'}}      
              type="text" 
              placeholder={wine.description}
              value={input.description}
         
              name='description'
              autoComplete="off"
              onChange={handleOnChange}
                />
        </div>
          
            <Button variant="contained" className={style.button} type="submit"  disabled={Object.keys(error).length}> Actualizar </Button>
      </form>
      </div>

    </div>
  );
};