import React, { useEffect, useState } from "react";
import "./index.css";
import FilterAndSearch from "./../../component/FilterAndSearch/FilterAndSearch";
import UserCart from "../../component/UserCart/UserCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../asyncActions/asyncUsers";

export default function Home() {
  const dispatch = useDispatch()
  const [handleUsers, setHandleUsers] = useState({
    usersAll:true,
    usersFavorite:false
  })
  const usersAll = useSelector(state=>{
    const {users,searchName} = state.users
    if (!searchName)
      return users

    return users.filter((user) => {
      const firstLastName = user.firstName + " " + user.lastName;
      return firstLastName
        .toLowerCase()
        .includes(searchName.toLowerCase());
    })
  }
  )
  const usersFavorite =useSelector(state=>state.users.favorite)

  useEffect(() => {
    const localUsers = localStorage.getItem('persist:root')
    if(!localUsers){
      dispatch(fetchUsers())
    }
  }, [])


  return (
    <div>
      <FilterAndSearch handleUsers={handleUsers} setHandleUsers={setHandleUsers}/>
      <div className="contactesList">
        {
         (usersAll && handleUsers.usersAll)? usersAll.map((user,index)=>{
            return(
              <UserCart key={user.id} user = {user}  />
            )
          }):
          (usersFavorite && handleUsers.usersFavorite)?usersFavorite.map((user,index)=>{
            return(
              <UserCart key={user.id} user = {user}  />
            )
          }):<div>empty...</div>
        }
      </div>
    </div>
  );
}
