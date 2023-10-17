import './hotbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { buildLinkPath } from '../../utils/buildLinkPath';

export const Hotbar = () => {
const { pathname } = useLocation();
    return (
        <div className='hotbar'>
            <div >
                <FontAwesomeIcon icon={faFire} style={{color: "#797777",}} size='xl'/>
                <Link to={buildLinkPath(pathname, 'hot')} className='barLink'>Hot</Link>
                </div>
            <div >
                <FontAwesomeIcon icon={faSun} style={{color: "#797777",}} size='xl'/>
                <Link to={buildLinkPath(pathname, 'new')} className='barLink'>New</Link>
                </div>
           <div >
                <FontAwesomeIcon icon={faArrowsUpToLine} style={{color: "#797777",}} size='xl'/>
                <Link to={buildLinkPath(pathname, 'rising')} className='barLink'>Rising</Link>
                </div>
        </div>
    )
}