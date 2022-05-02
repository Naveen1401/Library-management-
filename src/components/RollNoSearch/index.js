import {React,useState} from 'react'
import { userSliceActions } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const RollNoSearch = () => {

    const absData = useSelector((state) => state.user.abData);

    console.log(absData);

    const [temp, settemp] = useState([absData])


    const rollno = (event)=>{
        const searchRollno = event.target.value;
        // const searchRollno = parseInt(event.target.value);
        const filteredRollno = absData?.filter((value)=>{
            return value.rollNumber.toString().includes(searchRollno);
        })
        settemp(filteredRollno);
        console.log("-->",temp.length);
        console.log(filteredRollno);
    }

    return (
        <div>
            <input type="text" name="RollNo" onChange={rollno} />
            {temp.length > 0 ? <span></span> : <span>No such User Available</span>}
        </div>
    )
}

export default RollNoSearch