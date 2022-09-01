// import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './NavBarHome.css'
import navImage from '../../images/dogNav.jpg'
// import { cleanDetail } from "../../actions";



export default function NavBarDetail(){


// const dispatch = useDispatch()
// const detail = useSelector((state) => state.detail)

// const handleCleanDetail = () => {
//     if(detail.length){
//         dispatch(cleanDetail())
//     }
// }

    return(
    <div className="topnav">
        <div className="links">
            <Link to = '/home' className='linkNav' > Back to Home </Link>
            <Link to = '/dogs' className='linkNav'> Create Dogs </Link>
        </div>
        <div className="dogapi">THE DOG API</div>
        <div className="searchlogo">
            <img className='navlogo' src ={navImage} alt='Nav not found' />
        </div>
    </div>
    )
}