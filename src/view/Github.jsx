import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../features/github/githubSlice';

const Github = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const {user, loading, error} = useSelector((state) => state.github);

    const handleSearch = () => {
        if (username.trim()){
            dispatch(getUser(username));
        }
    };

   
    return (
        <div style={{ marginTop: "20px" }}>
             
            <input
             type="text"
             placeholder='Search Github username...'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             />

           <button style={{ marginLeft: "10px" }} onClick={handleSearch} >Search</button>  



           <div style={{ marginTop: "20px" }}>
           {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {!loading && !error && !user && <h3>Search any Github user....</h3>}
        {!loading && !error && user && user.message === 'Not found' && <h3>User not found</h3>}

        {user && !user.message && (
          <div>
            <img
              src={user.avatar_url}
              alt={user.name}
              width={120}
              style={{ borderRadius: '50%' }}
            />
            <h2>{user.name}</h2>
            <p>@{user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        )}
            
            </div> 

        </div>
    )
}

export default Github;