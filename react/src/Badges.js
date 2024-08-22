// import React from 'react';

// const violetBadge = 'cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700';
// const indigoBadge = 'cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500';

// const TwixtBadges = ({ text, overwriteClass }) => {
//     return (
//         <div className='grid gap-5'>
//             <div className={overwriteClass || violetBadge}>
//                 <span className="p-1">
//                     {text}
//                 </span>
//             </div>
//             <div>
//                 <span className={indigoBadge}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
//                     </svg>
//                     {text}
//                 </span>
//             </div>
//         </div>
//     );
// }

// export default TwixtBadges;
import React from 'react';

const violetBadge = 'cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700';
const indigoBadge = 'cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500';

const TwixtBadges = ({ text, overwriteClass, variant = 'violet' }) => {
    const badgeClass = variant === 'violet' ? violetBadge : indigoBadge;

    return (
        <div className={overwriteClass || badgeClass}>
            <span className="p-1">
                {text}
            </span>
        </div>
    );
}

export default TwixtBadges;
