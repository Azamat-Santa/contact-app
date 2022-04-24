import React from "react";
import heartBlack from "../../images/heartBlack.png";
import geo from "../../images/geo.png";
import smartphone from "../../images/smartphone.png";
import internet from "../../images/internet.png";
import massage from "../../images/massage.png";
import heart from "../../images/heart.png";
import "./index.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addFavoriteAction } from "../../redux/actions";
import { removeFavoriteAction } from './../../redux/actions';
const UserCart = ({user}) => {

  const dispatch =useDispatch()

  const handlerFavorite = (boolean, id , user) =>{
      if(!boolean){
        dispatch(addFavoriteAction({id,user}))
      }
      if(boolean){
        dispatch(removeFavoriteAction(id))
      }
  }
  const saveLocalUser = () =>{
    localStorage.setItem('userDatail' , JSON.stringify(user))
  }
  
  return (
    <div className="user-cart">
      <img src={user.image} alt="" className="user-img" />
      <div className="user-cart__content">
      <div className="user-cart__name">
        <h3>{user.firstName} {user.lastName}</h3>
        <img src={user.complete ? heart : heartBlack} alt="" onClick={()=>handlerFavorite(user.complete , user.id , user)} />
      </div>

      <div className="user-cart__item">
        <img src={geo} alt="" />
        <p>{user.city} city, {user.country}</p>
      </div>
      <div className="user-cart__item">
        <img src={smartphone} alt="" />
        <p>+996 550 002 232</p>
      </div>
      <div className="user-cart__item">
        <img src={internet} alt="" />
        <p>{user.website}</p>
      </div>
      <div className="user-cart__item">
        <img src={massage} alt="" />
        <p>{user.email}</p>
      </div>
      <Link to={"/contactDetails"} onClick={()=>saveLocalUser(user)}><Button text='show'/> </Link>     
      </div>
    </div>
  );
};

export default UserCart;
