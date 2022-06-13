// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// import { deleteCart, getOrders, getShoppingCar, putPurchase ,sendPurchaseEmail,updateStock} from "../../redux/actions/actions";

// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TableFooter from '@mui/material/TableFooter'

// import Style from "./Success.module.css";

// export function Succes() {
//   const dispatch = useDispatch();
//   const search = useLocation().search;
//   const payment_id = new URLSearchParams(search).get("payment_id");
//   const status = new URLSearchParams(search).get("status");
//   let idPurchase = JSON.parse(localStorage.getItem("idPurchase"));
//   // const wine = useSelector((state)=> state.wines)
//   let store = JSON.parse(localStorage.getItem('user'))
//   // console.log(store.user.name.split(" ").slice(0,1))
//   // console.log(store.user.uid)
//   const navigate = useNavigate()
//  let totalCost=0;
//   const data = {
//     payment_id: payment_id,

//     status : status === 'null' ? 'rejected': status,

//   };

//   const cart = useSelector(state => state.Cart)
//   let STATEorders= useSelector(state=>state.orders)

//   let x4 =[]
//   const stockUpdated=cart?.map(e=>{
//     let stockLeft=  e.wineActual.stock-e.cant

//     x4.push({
//       stock:stockLeft,
//       id:e.wineActual._id
//     })
//   });

// if(status === 'rejected' || status === 'null'){
//   console.log('no pasa nada')
// }else{
// if(x4.length>0){
// dispatch(updateStock(x4))
// dispatch(deleteCart())
// }
// }
//   useEffect(()=>{
//     var f5 = x4

//     dispatch(getShoppingCar())

// //   if(status === 'rejected' || status === 'null'){

// //    console.log('rejected')
// //   }else if(status === "pending" ||status === "approved"){

// //   const stockUpdated=cart?.map(e=>{
// //     let stockLeft=  e.wineActual.stock-e.cant

// //     return{
// //       stock:stockLeft,
// //       id:e.wineActual._id
// //     }
// //   });

// //   dispatch(getOrders())

// //   //dispatch(deleteCart());

// // }

//  }, []);

//   const email=()=>{
//     dispatch(sendPurchaseEmail());
//     navigate('/userOrders/approved');
//   }

//   return (
//     <div className={Style.hache1}>
//       {status === "pending" ? (<div className={Style.CompraPendiente}>
//         <h1><PriorityHighIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}>Pago pendiente</h1>
//         <p>Nuestro equipo de seguridad está revisando tu pago.</p>
//         <p>En menos de dos días hábiles, te confirmaremos por</p>
//         <p className={Style.subtitle}>e-mail si se acreditó correctamente.</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//         </h2>
//       </div>) : status === "approved" ? (<div className={Style.CompraAprobada}>
//         <h1><CheckIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}>Transaccion exitosa</h1>
//         <p>{store.user.name.split(" ").slice(0,1)}, la compra se ha realizado correctamente.</p>
//         <p>Solicita un email, para conocer mas sobre tu compra</p>
//         <p>O puedes ver mas de nuestros productos en Inicio</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//           <button className={Style.buttom} onClick={email}>Enviar Email de confirmacion</button>
//           </h2>

//       </div>

//       ) : (<div className={Style.CompraCancelada}>
//         <h1><CloseIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}> Compra cancelada</h1>
//         <p>{store.user.name.split(" ").slice(0,1)}, la compra no salió como esperábamos.</p>
//         <p>Corrobore que los datos ingresados hayan sido correctos, puedes volver a intentarlo</p>
//         <p>desde nuestro carrito. O puedes seguir consultando por nuestros productos en Inicio.</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//           <Link to = "/shoppingCar">
//           <button className={Style.buttom}>Volver al Carrito</button>
//           </Link>
//         </h2>
//       </div>)}

//       <TableContainer component={Paper}>
//         <h2 className={Style.details}>Detalle de la compra</h2>
//       <Table >
//         <TableHead>
//         <TableRow>
//           <TableCell>Nombre</TableCell>
//           <TableCell>Producto</TableCell>
//           <TableCell>Cantidad</TableCell>
//           <TableCell>Precio</TableCell>
//         </TableRow>
//         </TableHead>
//         <TableBody>
//         {STATEorders[STATEorders.length-1]?.cart?.map(ord=>{
//         totalCost=totalCost+ (ord.quantity* ord.unit_price);
//         return(<TableRow key={ord.picture_url}>
//           <TableCell>{ord.title}</TableCell>
//           <TableCell><img className={Style.cardImg} src={ord.picture_url} alt=""/></TableCell>
//           <TableCell>{ord.quantity}</TableCell>
//           <TableCell><div>${ord.unit_price}</div><div>subtotal: ${ord.quantity* ord.unit_price}</div></TableCell>
//             </TableRow>)
//         })}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell>Total: ${totalCost}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//       </TableContainer>
//     </div>
//   );
// // }
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// import { deleteCart, getOrders, putPurchase ,sendPurchaseEmail,updateStock} from "../../redux/actions/actions";

// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TableFooter from '@mui/material/TableFooter'

// //styles
// import Style from "./Success.module.css";

// export function Succes() {
//   const dispatch = useDispatch();
//   const search = useLocation().search;
//   const payment_id = new URLSearchParams(search).get("payment_id");
//   const status = new URLSearchParams(search).get("status");
//   let idPurchase = JSON.parse(localStorage.getItem("idPurchase"));
//   // const wine = useSelector((state)=> state.wines)
//   let store = JSON.parse(localStorage.getItem('user'))
//   // console.log(store.user.name.split(" ").slice(0,1))
//   // console.log(store.user.uid)
//   const cart = useSelector(state => state.Cart)
//   const navigate = useNavigate()
//  let totalCost=0;
//   const data = {
//     payment_id: payment_id,

//     status : status === 'null' ? 'rejected': status,

//   };
//   let STATEorders= useSelector(state=>state.orders)
//   useEffect(()=>{
//     dispatch(getOrders())
//   },[dispatch])

//   const email=()=>{
//     dispatch(sendPurchaseEmail());
//     navigate('/userOrders/approved');
//   }

//   let x4 =[]
//   const stockUpdated=cart?.map(e=>{
//     let stockLeft=  e.wineActual.stock-e.cant

//     x4.push({
//       stock:stockLeft,
//       id:e.wineActual._id
//     })
//   });

// if(status === 'rejected' || status === 'null'){

// }else{
// if(x4.length>0){
// dispatch(updateStock(x4))
// dispatch(deleteCart())
// }
// }
//   useEffect(() => {
//    dispatch(putPurchase(idPurchase, data));
//     localStorage.removeItem("idPurchase");

// }, []);

//   return (
//     <div className={Style.hache1}>
//       {status === "pending" ? (<div className={Style.CompraPendiente}>
//         <h1><PriorityHighIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}>Pago pendiente</h1>
//         <p>Nuestro equipo de seguridad está revisando tu pago.</p>
//         <p>En menos de dos días hábiles, te confirmaremos por</p>
//         <p className={Style.subtitle}>e-mail si se acreditó correctamente.</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//         </h2>
//       </div>) : status === "approved" ? (<div className={Style.CompraAprobada}>
//         <h1><CheckIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}>Transaccion exitosa</h1>
//         <p>{store.user.name.split(" ").slice(0,1)}, la compra se ha realizado correctamente.</p>
//         <p>Solicita un email, para conocer mas sobre tu compra</p>
//         <p>O puedes ver mas de nuestros productos en Inicio</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//           <button className={Style.buttom} onClick={email}>Enviar Email de confirmacion</button>
//           </h2>

//       </div>

//       ) : (<div className={Style.CompraCancelada}>
//         <h1><CloseIcon fontSize="large"/></h1>
//         <h1 className={Style.subtitle}> Compra cancelada</h1>
//         <p>{store.user.name.split(" ").slice(0,1)}, la compra no salió como esperábamos.</p>
//         <p>Corrobore que los datos ingresados hayan sido correctos, puedes volver a intentarlo</p>
//         <p>desde nuestro carrito. O puedes seguir consultando por nuestros productos en Inicio.</p>
//         <h2>
//           <Link to="/">
//           <button className={Style.buttom}>Inicio</button>
//           </Link>
//           <Link to = "/shoppingCar">
//           <button className={Style.buttom}>Volver al Carrito</button>
//           </Link>
//         </h2>
//       </div>)}

//       <TableContainer component={Paper}>
//         <h2 className={Style.details}>Detalle de la compra</h2>
//       <Table >
//         <TableHead>
//         <TableRow>
//           <TableCell>Nombre</TableCell>
//           <TableCell>Producto</TableCell>
//           <TableCell>Cantidad</TableCell>
//           <TableCell>Precio</TableCell>
//         </TableRow>
//         </TableHead>
//         <TableBody>
//         {STATEorders[STATEorders.length-1]?.cart?.map(ord=>{
//         totalCost=totalCost+ (ord.quantity* ord.unit_price);
//         return(<TableRow key={ord.picture_url}>
//           <TableCell>{ord.title}</TableCell>
//           <TableCell><img className={Style.cardImg} src={ord.picture_url} alt=""/></TableCell>
//           <TableCell>{ord.quantity}</TableCell>
//           <TableCell><div>${ord.unit_price}</div><div>subtotal: ${ord.quantity* ord.unit_price}</div></TableCell>
//             </TableRow>)
//         })}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell>Total: ${totalCost}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//       </TableContainer>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import {
  deleteCart,
  getOrders,
  getShoppingCar,
  putPurchase,
  sendPurchaseEmail,
  updateStock,
} from "../../redux/actions/actions";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";

import Style from "./Success.module.css";

export function Succes() {
  const dispatch = useDispatch();
  const search = useLocation().search;
  const payment_id = new URLSearchParams(search).get("payment_id");
  const status = new URLSearchParams(search).get("status");
  let idPurchase = JSON.parse(localStorage.getItem("idPurchase"));
  let store = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  let totalCost = 0;
  const data = {
    payment_id: payment_id,
    
    status: status === "null" ? "rejected" : status,
  };

  const cart = useSelector((state) => state.Cart);
  let STATEorders = useSelector((state) => state.orders);

  useEffect(()=>{
        dispatch(getOrders())
      },[dispatch])

  let x4 = [];
  const stockUpdated = cart?.map((e) => {
    let stockLeft = e.wineActual.stock - e.cant;

    x4.push({
      stock: stockLeft,
      id: e.wineActual._id,
    });
  });
  if (status === "rejected" || status === "null") {
    console.log('')
  } else {
    if (x4.length > 0) {
      dispatch(updateStock(x4));
      dispatch(deleteCart());
    }
  }
  
  useEffect(() => {
    dispatch(getShoppingCar());
    dispatch(putPurchase(idPurchase, data));
    localStorage.removeItem("idPurchase");
    
  }, []);

  const email = () => {
    dispatch(sendPurchaseEmail());
    navigate("/userOrders/approved");
  };

  return (
    <div className={Style.hache1}>
      {status === "pending" ? (
        <div className={Style.CompraPendiente}>
          <h1>
            <PriorityHighIcon fontSize="large" />
          </h1>
          <h1 className={Style.subtitle}>Pago pendiente</h1>
          <p>Nuestro equipo de seguridad está revisando tu pago.</p>
          <p>En menos de dos días hábiles, te confirmaremos por</p>
          <p className={Style.subtitle}>e-mail si se acreditó correctamente.</p>
          <h2>
            <Link to="/">
              <button className={Style.buttom}>Inicio</button>
            </Link>
          </h2>
        </div>
      ) : status === "approved" ? (
        <div className={Style.CompraAprobada}>
          <h1>
            <CheckIcon fontSize="large" />
          </h1>
          <h1 className={Style.subtitle}>Transaccion exitosa</h1>
          <p>
            {store.user.name.split(" ").slice(0, 1)}, la compra se ha realizado
            correctamente.
          </p>
          <p>Solicita un email, para conocer mas sobre tu compra</p>
          <p>O puedes ver mas de nuestros productos en Inicio</p>
          <h2>
            <Link to="/">
              <button className={Style.buttom}>Inicio</button>
            </Link>
            <button className={Style.buttom} onClick={email}>
              Enviar Email de confirmacion
            </button>
          </h2>
        </div>
      ) : (
        <div className={Style.CompraCancelada}>
          <h1>
            <CloseIcon fontSize="large" />
          </h1>
          <h1 className={Style.subtitle}> Compra cancelada</h1>
          <p>
            {store.user.name.split(" ").slice(0, 1)}, la compra no salió como
            esperábamos.
          </p>
          <p>
            Corrobore que los datos ingresados hayan sido correctos, puedes
            volver a intentarlo
          </p>
          <p>
            desde nuestro carrito. O puedes seguir consultando por nuestros
            productos en Inicio.
          </p>
          <h2>
            <Link to="/">
              <button className={Style.buttom}>Inicio</button>
            </Link>
            <Link to="/shoppingCar">
              <button className={Style.buttom}>Volver al Carrito</button>
            </Link>
          </h2>
        </div>
      )}

      <TableContainer component={Paper}>
        <h2 className={Style.details}>Detalle de la compra</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {STATEorders[STATEorders.length - 1]?.cart?.map((ord) => {
              totalCost = totalCost + ord.quantity * ord.unit_price;
              return (
                <TableRow key={ord.picture_url}>
                  <TableCell>{ord.title}</TableCell>
                  <TableCell>
                    <img
                      className={Style.cardImg}
                      src={ord.picture_url}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>{ord.quantity}</TableCell>
                  <TableCell>
                    <div>${ord.unit_price}</div>
                    <div>subtotal: ${ord.quantity * ord.unit_price}</div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total: ${totalCost}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
