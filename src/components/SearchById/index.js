import react, { useState, useEffect } from "react";
import style from "./style.css";
import { dataSliceActions } from "../../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "../AddBook";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const SearchById = ({ placeholder }) => {

    const absData = useSelector((state) => state.data.abData)
    const dispatch = useDispatch();

    console.log(absData);   
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const filteredList = absData?.filter((value) => {
            return value.id.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            dispatch(dataSliceActions.setData({ data: absData }));

        } else {
            dispatch(dataSliceActions.setData({ data: filteredList }))
            console.log(filteredList);
        }
    }

    return <div>
        <div className="searchDiv">
            <div className="searchsection">
                <SearchRoundedIcon />
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
            </div>
            <div className="addbookbtn">
                <AddBook />
            </div>
        </div>
    </div>
}

export default SearchById;