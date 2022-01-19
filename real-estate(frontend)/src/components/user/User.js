
import React, {useEffect } from 'react'
import { fetchUserData } from '../../store/UserSlice';
import UserTable from './UserTable';
import { useDispatch,useSelector } from 'react-redux';

function User() {

    const allUserList = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUserData());
    }, []);

    return (
        <div>
            <UserTable allUser={allUserList} />
        </div>
    )
}

export default User;
