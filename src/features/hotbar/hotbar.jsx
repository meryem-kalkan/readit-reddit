import './hotbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';

export const Hotbar = () => {


    return (
        <div className='hotbar'>
           <FontAwesomeIcon icon={faFire} style={{color: "#797777",}} size='xl'/>
           <FontAwesomeIcon icon={faSun} style={{color: "#797777",}} size='xl'/>
           <FontAwesomeIcon icon={faArrowsUpToLine} style={{color: "#797777",}} size='xl'/>
        </div>
    )
}