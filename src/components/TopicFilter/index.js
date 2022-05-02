import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { dataSliceActions } from '../../store/dataSlice';
import "./style.css"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const TopicFilter = ()=> {

    const [topicData, setTopicData] = useState([]);

    const data = useSelector((state) => state.data.abData);
    const filtdata = useSelector((state) => state.data._data);

    const dispatch  = useDispatch();


    console.log(topicData);

    const selectedTopic = (event) =>{
        const filterWord = event.target.value;
        const topicList = data.filter((value)=>{
            return value.topic.toLowerCase().includes(filterWord.toLowerCase());
        });

        dispatch(dataSliceActions.setData({data: topicList}));

        // setTopicData(topicList);
    }

    return (
    <div>
        <div className='topicfilter'>
            <FilterAltIcon/>
            <select name="TopicSelector" className='topicselector' id="topicSelector" onChange={selectedTopic}>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="maths">Mathematics</option>
            </select>
        </div>
        <hr />
        <div className='booklistHeading'>
            <h1>Book List</h1>
            <h3>{filtdata.length} Books</h3>
        </div>
    </div>
    )
}

export default TopicFilter
 