import react, { useState, useEffect } from "react";
import "./style.css";
import AllBooks from "../AllBooks";
import TopicFilter from "../TopicFilter";
import { dataSliceActions } from "../../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = ({placeholder})=>{

    // console.log("---->",data);
    const absData = useSelector((state) => state.data.abData)
    const dispatch = useDispatch();

    console.log(absData);

    // const [FilteredData, setFilteredData] = useState([]);
    const handleFilter = (event)=>{
        const searchWord = event.target.value;
        const filteredList = absData?.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord===""){
            dispatch(dataSliceActions.setData({ data: absData}));

        }else{
            dispatch(dataSliceActions.setData({ data: filteredList }))
        }
    }
    
    return <div>
        <div className = "searchDiv">
            <div className="searchsection">
                <SearchRoundedIcon />
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
            </div>
        </div>
        {/* <TopicFilter/> */}
        {/* <AllBooks /> */}
        {/* {FilteredData.length !=0 &&(
        <div className="resultDiv">
            {FilteredData.slice(0,15).map((value)=>
            {
                return (
                    <a className="bookItem" href="" target="_blank">
                        <p>{value.author}</p>
                    </a>
                )
            })}
        </div>
        )} */}
    </div>
}

export default SearchBar;