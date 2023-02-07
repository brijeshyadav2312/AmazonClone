import React, { useEffect, useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { addProducts, addProductsINCart, removeProductsINCart} from '../redux/action'
import { Puff } from 'react-loading-icons'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import banner from '../Assets/banner.jpg'
import axios from 'axios'
import sl1 from '../Assets/slider1.jpg'
import sl2 from '../Assets/slider2.jpg'
import sl3 from '../Assets/slider3.jpg'
import sl4 from '../Assets/slider4.jpg'
import sl5 from '../Assets/slider5.jpg'
import '../css/main.css'

const Main = () => {

    const[isfetch,setIsFetch] = useState(false)
    const[imgSlid,setimgSlid] = useState(0)
    const product = useSelector((state) => state)
    const dispatch = useDispatch();

    const fectData = async () =>{
        if(!isfetch){
            const res = await axios.get('https://fakestoreapi.com/products').catch((err) => console.error(err))
            const data = await res.data;
            dispatch(addProducts(data))
            setIsFetch(true)
        }
    }
    useEffect(() => {
        fectData()
    },[])

    console.log(product.Cart)
    const imageArr = [sl1,sl2,sl3,sl4,sl5];

    const handleRightSlid = () =>{
        if(imgSlid===imageArr.length-1){
            setimgSlid(0)
        }
        else{
            setimgSlid(imgSlid+1)
        }
    }
    const handleleftSlid = () =>{
        if(imgSlid===0){
            setimgSlid(imageArr.length-1)
        }
        else{
            setimgSlid(imgSlid-1)
        }
    }

  return (
    <div className='mainHeader'>
      <div className='sliderElement'>
        <img src={imageArr[imgSlid]} alt="slider"/>
      </div>
      <div className='navigationButton'>
        <span onClick={handleRightSlid}><BsChevronLeft/></span>
        <span onClick={handleleftSlid}><BsChevronRight/></span>
      </div>
      <div className='contentSection'>
        <div className='crd'>
            {
                product.product[0]?.slice(0,4)?.map((elem,idx) => {
                    return(
                        <div className='card'>
                            <img className='productImage' alt='productImage' src={elem.image}/>
                            <p key={idx}>{elem.title}</p>
                            <p  className='rating'>
                            {
                                Array(5).fill("1").map((_,idx) => {
                                    return(
                                        <span>{idx < Math.round(elem?.rating.rate)?(<AiFillStar/>):(<AiOutlineStar/>)}</span>
                                    )
                                })
                            }
                            </p>
                            <p className='description'>{elem.description.split(" ").slice(0,12).join(" ")}...</p>
                            <p>₹ {(elem.price * 10).toFixed(1)}</p>
                            {
                                product.Cart.some((p) => p?.id === elem?.id)?
                                (<p className='removefromCart' onClick={() => dispatch(removeProductsINCart(elem.id))}>{"REMOVE FROM CART"}</p>):
                                (<p className='addToCart' onClick={() => dispatch(addProductsINCart(elem))}>{"ADD TO CART"}</p>)
                            }
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className='banner'>
        <img  src={banner} alt="banner"/>
      </div>
      <div className='crd'>
            {
                product.product[0]?.slice(4,20).map((elem,idx) => {
                    return(
                        <div className='card'>
                            <img className='productImage' alt='productImage' src={elem.image}/>
                            <p key={idx}>{elem.title}</p>
                            <p  className='rating'>
                            {
                                Array(5).fill("1").map((_,idx) => {
                                    return(
                                        <span>{idx < Math.round(elem?.rating.rate)?(<AiFillStar/>):(<AiOutlineStar/>)}</span>
                                    )
                                })
                            }
                            </p>
                            <p className='description'>{elem.description.split(" ").slice(0,12).join(" ")}...</p>
                            <p>₹ {(elem.price * 10).toFixed(1)}</p>
                            {
                                product.Cart.some((p) => p?.id === elem?.id)?
                                (<p className='removefromCart' onClick={() => dispatch(removeProductsINCart(elem.id))}>{"REMOVE FROM CART"}</p>):
                                (<p className='addToCart' onClick={() => dispatch(addProductsINCart(elem))}>{"ADD TO CART"}</p>)
                            }
                        </div>
                    )
                })
            }
        </div>
        <div className={product.product[0]?.length>0?("loadingnone"):('loading')}>
            <Puff />
        </div>
    </div>
  )
}

export default Main
