import React, {useEffect} from 'react';
import { fetchUsers, setSearchText } from '../features/users/userSlice';
import {useDispatch, useSelector } from 'react-redux';

function UserList () {
    // console.log(fetchUsers);
    const dispatch = useDispatch();
    const {list, loading, error, searchText} = useSelector((state) => state.users);

    useEffect(()=> {
        dispatch(fetchUsers());
        // console.log(dispatch(fetchUsers()));
    }, [dispatch])

    const filteredList = list.filter((u) =>
    `${u?.name?.first ?? ""} ${u?.name?.last ?? ""}`
    .toLowerCase()
    .includes((searchText || "").toLowerCase())
    )


    return(
        <div style={{ width: "500px", margin: "40px auto" }}>
               <h2>Random Users (API + Redux Toolkit)</h2>

               <input
                type="text" 
                name="" 
                id=""
                placeholder='Search users...'
                value = {searchText}
                onChange = {(e) => dispatch(setSearchText(e.target.value))}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginBottom: "20px",
                  }}
                 />

        {loading && <h2> Loading... </h2>}
        {error && <h2 style={{ color: "red" }}> {error} </h2>}    

        <ul>
               {
                filteredList.map((user, index) => (
                    <li 
                    key={index}
                    style={{
                        listStyle: "none",
                        marginBottom: "10px",
                        padding: "10px",
                        background: "#f4f4f4",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    > 
                    <img 
                    src='user.picture.thumbnail'
                    alt=''
                    style={{ borderRadius: "50%" }}
                    />

                    <span>
                        {user?.name?.first}  {user?.name?.last}
                    </span>


                    </li>
                ))
               }   
        </ul>     
        
         </div>
    )
}


export default UserList;