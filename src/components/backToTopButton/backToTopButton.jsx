import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import './backToTopButton.css';
import { useEffect, useState } from 'react';

export const BackToTopButton = () => {
   
    const [visible, setVisible] = useState(false);

      const toggleVisible = () => {
        const scrollTop = document.documentElement.scrollTop;
       if (scrollTop  > 1200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
      }

   const buttonClickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
   }

   useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
        window.removeEventListener("scroll", toggleVisible);
    }
   })

    return (
        <>
        {
        visible ?
        <FontAwesomeIcon className='button' icon={faCircleUp} onClick={buttonClickHandler}/>
        :
        ''
        }
        </>
        )
}