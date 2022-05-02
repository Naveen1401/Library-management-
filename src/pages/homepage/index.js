import { useEffect } from "react";
import SideBar from "../../components/SideBar/index";
import SearchBar from "../../components/SearchBar/index";
import TopicFilter from "../../components/TopicFilter";
import AllBooks from "../../components/AllBooks";
import "./style.css";
import BookData from "../../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { dataSliceActions } from "../../store/dataSlice";


const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(dataSliceActions.setData({ data: BookData }));
        dispatch(dataSliceActions.setAbData({ data: BookData }));

    }, [])
    const data = useSelector((state) => state.data.abData);
    // console.log('---->', data);
    return <>

        <div>
            <SearchBar placeholder="Search" />
            <TopicFilter />
            <AllBooks />
        </div>
        {/* <TopicFilter data={BookData}/> */}
    </>
}

export default HomePage;
