import './hotbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Hotbar = () => {


    return (
        <div className='hotbar'>
            <div >
                <FontAwesomeIcon icon={faFire} style={{color: "#797777",}} size='xl'/>
                <Link className='barLink'>Hot</Link>
                </div>
            <div >
                <FontAwesomeIcon icon={faSun} style={{color: "#797777",}} size='xl'/>
                <Link className='barLink'>New</Link>
                </div>
           <div >
                <FontAwesomeIcon icon={faArrowsUpToLine} style={{color: "#797777",}} size='xl'/>
                <Link className='barLink'>Rising</Link>
                </div>
        </div>
    )
}