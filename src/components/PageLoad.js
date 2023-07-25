// import React from 'react'
// import { useState, useEffect } from 'react'

// const PageLoad = () => {

//     const [uniqueVisitor, setUniqueVisitor] = useState(0);

//     useEffect( () => {
//         const fetchData = async () => {
//             try {
        
//            setTimeout (async ()  =>{   
//             const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getUniqueVisitors');
//                 const data = await response.json();
//                 const uniqueVisitors = data.response.fiter(item => item.uniqueVisitor);
//                 const uniqueVisitorCount = uniqueVisitors.length;
//                 setUniqueVisitor(uniqueVisitorCount);
//             },);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//         fetchData();
//     }, []);


//   return (
//     <div>PageLoad</div>
//   )
// }

// export default PageLoad