import PropTypes from 'prop-types';
import { Children } from 'react';

ContactMeButton.propTypes = {
   text: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
};
export default function ContactMeButton({ text, link, children }) {
   return (
      <button onClick={link} className="h-20 w-40 flex rounded-lg p-1 bg-gradient-to-r from-gr-0 to-gr-30 transition duration-300 ease-in-out lg:flex-row">
         <p className="h-[74px] w-[156px]  font-Inter rounded-lg  gap-x-2 flex items-center justify-center place-self-center hover:bg-transparent
         text-black bg-white
         hover:text-white
         dark:bg-secondary-darkgray dark:text-white
         dark:hover:bg-transparent dark:hover:text-white
         transition duration-300 ease-in-out">
            {Children.map(children, child =>
               <>
                  {child}
               </>
            )}
            {text}
         </p>
      </button>
   );
}

// hover:bg-transparent hover:text-white
// dark:bg-dark-secondary-darkgray dark:text-dark-white
// dark:hover:bg-transparent dark:hover:text-dark-white