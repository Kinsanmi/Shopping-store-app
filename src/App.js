import './App.css';
import {Routers} from './Router/Routers';
import { useState, useEffect, useTransition } from 'react';
import { BeautyDeal, Computing, ElectronicDeal, FashionDeal, LargeAppliance, PhoneTablets, SuperMarketDeal, fetchData } from './Data/Products/Product';

import { Loading } from './Components/Loading/Loading';

function App() {

  // import array of images to be added to cart
  const productItems = LargeAppliance;
  const productItem = PhoneTablets;
  const product_Item = FashionDeal;
  const product_Item_Market = SuperMarketDeal;
  const product_Item_Electronic = ElectronicDeal;
  const product_Item_Beauty = BeautyDeal;
  const product_Item_Computing = Computing;


  // text search

  const [search, setSearch] = useState(ElectronicDeal);

  const [names, setNames] = useState("");

  const [err, setErr] = useState("")

  const searchInput = () =>{
    const results = ElectronicDeal.filter((item) => item.text.toLocaleLowerCase().includes(names.toLocaleLowerCase()));
    setSearch(results);
  }

  useEffect(()=>{
    searchInput()
  },[names])


  // Notification
  const [notificationMessage, setNotificationMessage] = useState(false);


  // Delete notification from cart
  const [deleteNotificationMessage, setDeleteNotificationMessage] = useState(false);


  // initializing an empty array
  const [cartItems, setCartItems] = useState([]);

  const [showConfirmation, setShowConfirmation] = useState(false);




  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id)

    if(ProductExist){
      const newCartItem = cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item);
      setCartItems(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(newCartItem));

      } else{
        const newCartItem = [...cartItems, {...product, quantity: 1}]
        setCartItems(newCartItem);
        localStorage.setItem('cartItems', JSON.stringify(newCartItem));
    };

    // Notification message
    setNotificationMessage(true);

    setTimeout(() => {
      setNotificationMessage(false);
    }, 3000);
   
  }




  // Remove products with the negative button which we don't want, rather a delete button 

  const handleRemoveProduct = (product)=>{

    const ProductExist = cartItems.find((item)=> item.id === product.id);



    if(ProductExist.quantity === 1){
      const newCartItem = cartItems.filter((item)=> item.id !== product.id)
      setCartItems(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(newCartItem));
    } else{
      const newCartItem = cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      setCartItems(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(newCartItem));
    }
  }


  useEffect(()=>{
    startTransition(()=>{
      setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    });
  
  },[]);



  const removeItem = (itemId)=>{
    /* const updateCart = [...cartItems];
    updateCart.splice(index);
    setCartItems(updateCart) */

    const tempCart = cartItems.filter((item)=> item.id 
    !== itemId);
    setCartItems(tempCart);
    localStorage.setItem('cartItems', JSON.stringify(tempCart));


    setDeleteNotificationMessage(true);
      setTimeout(() => {
        setDeleteNotificationMessage(false);
      }, 4000);

    /* setItemToDelete(itemId); */
    setShowConfirmation(true);
  }

  const [isPending, startTransition ] = useTransition()


  // Perform loading when window load
  const [loading, setLoading] = useState(false);

  /* const handleClick = () =>{
    window.addEventListener('load', ()=>{
      setLoading(true);
      // Once the window is loaded
    setTimeout(() => {
      setLoading(false);
    }, 3500);
    })
  } */

  const handleClick = async() =>{
    setLoading(true)
    try {
      const res = await fetchData()
      setSearch(res.allEvent)
    } catch (error) {
      setErr(error.message)
    }finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    handleClick();
  },[])


  // perform loading when page is requested

  const handlePage = ()=>{
    setLoading(true);

    // Once the window is loaded
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }


  const loadingData = () =>{
    if(loading) {
      return <div className='loads'><Loading /></div>
    }

    if(err){
      return <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height:"100vh"}}>404 Request Failed</div>
    }


    return (
    <Routers
    productItems={productItems}
    productItem={productItem}
    product_Item={product_Item}
    product_Item_Market={product_Item_Market}
    product_Item_Electronic={product_Item_Electronic}
    product_Item_Beauty={product_Item_Beauty}
    product_Item_Computing={product_Item_Computing}
    loading={loading}
    handleClick={handleClick}
    handlePage={handlePage}
    cartItems={cartItems}
    handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
    notificationMessage={notificationMessage}
    removeItem={removeItem}
    setShowConfirmation={showConfirmation}
    deleteNotificationMessage={deleteNotificationMessage}
    setNames={setNames}
    search={search}
    err={err}
    />
    )

    
  }
  
  return  (
    <>
    {loadingData()}
    </>
  );
}

export default App;
