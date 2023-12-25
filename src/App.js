import './App.css';
import {Routers} from './Router/Routers';
import { useState, useEffect, useTransition } from 'react';
import drinks from './Data/Products/Product';

import { Loading } from './Components/Loading/Loading';

function App() {

  // import array of images to be added to cart
  const productItems = drinks;


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
      /* cartItems.splice(ProductExist, 1, {...cartItems[ProductExist], quantity: cartItems[ProductExist].quantity + 1})
 */
      const newCartItem = cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item);
      setCartItems(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(newCartItem));

      } else{
        
        /* cartItems.push({...product, quantity: 1})
        setCartItems({cartItems: cartItems}) */
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

    const ProductExist = cartItems.find((item)=> item.id === product.id)



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
    })
  
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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () =>{
    window.addEventListener('load', ()=>{
      setIsLoading(true);
    })

    // Once the window is loaded
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  useEffect(()=>{
    handleClick();
  },[])


  // perform loading when page is requested

  const handlePage = ()=>{
    setIsLoading(true);

    // Once the window is loaded
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  
  return isLoading ? <Loading /> : (
    <>
    <Routers
    productItems={productItems}
    handleClick={handleClick}
    handlePage={handlePage}
    cartItems={cartItems}
    handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
    notificationMessage={notificationMessage}
    removeItem={removeItem}
    setShowConfirmation={showConfirmation}
    deleteNotificationMessage={deleteNotificationMessage}
    />
    </>
  );
}

export default App;
