import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import UserData from "../../users.json"
import AllUsers from '../../components/AllUsers';
import SearchUser from '../../components/SearchUser';
import { userSliceActions } from '../../store/userSlice';


const AddUser = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userSliceActions.setAbData({ data: UserData }));
        dispatch(userSliceActions.setData({ data: UserData }));
    }, []);

    return (
        <div>
            <SearchUser placeholder="Ender Roll No."/>
            <AllUsers/>
        </div>
    )
}

export default AddUser;