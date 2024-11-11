
// eslint-disable-next-line react/prop-types
export default function ContactMeButton({ text, link, children }) {
   return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="h-20 w-40 flex rounded-lg p-1 bg-gradient-to-r from-gr-0 to-gr-30 transition duration-300 ease-in-out lg:flex-row">
         <p className="h-[74px] w-[156px]  font-Inter rounded-lg  gap-x-2 flex items-center justify-center place-self-center hover:bg-transparent
         text-black bg-white
         hover:text-white
         dark:bg-secondary-darkgray dark:text-white
         dark:hover:bg-transparent dark:hover:text-white">
            {children}
            {text}
         </p>
      </a>
   );
}