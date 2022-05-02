import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddUser from '../AddUser';
import { userSliceActions } from '../../store/userSlice';
import style from "./style.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchUser = ({placeholder}) => {

    const absData = useSelector((state)=>state.user.abData);
    const dispatch = useDispatch();

    console.log(absData);

    const handleFilter = (event)=>{
        const searchRollNo = event.target.value;
        const filteredList = absData?.filter((value)=>{
            return value.rollNumber.toString().includes(searchRollNo);
        });

        if(searchRollNo===""){
            dispatch(userSliceActions.setData({data: absData}));
        }else{
            dispatch(userSliceActions.setData({data:filteredList}));
        }
    }

    return (
        <div>
            <div className="searchDiv">
                <div className='searchBox'>
                    <SearchRoundedIcon />
                    <input type="text" placeholder={placeholder} onChange={handleFilter} />
                </div>
                <div className='adduserbtn'>
                    <AddUser/>
                </div>
            </div>
        </div>
    )
}

export default SearchUser