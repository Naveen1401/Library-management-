import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import SearchById from '../../components/SearchById'
import BookData from "../../data.json";
import UserData from "../../users.json"
import { dataSliceActions } from '../../store/dataSlice';
import { userSliceActions } from '../../store/userSlice';
import AllBooksCard from '../../components/AllBooksCard';
import './style.css'


const Issue = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataSliceActions.setAbData({ data: BookData }));
        dispatch(dataSliceActions.setData({ data: BookData }));
    }, []);
    
    
    const dispatch2 = useDispatch();
    useEffect(() => {
        dispatch2(userSliceActions.setAbData({ data: UserData }));
        dispatch2(userSliceActions.setData({ data: UserData }));
    }, []);

    return (
        <>
            <div className='allbookspage'>
                <SearchById placeholder={"Enter Book Id"} />
                <AllBooksCard/>
            </div>
        </>
    )
}

export default Issue