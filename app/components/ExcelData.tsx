// // components/ExcelData.js
// import { table } from 'console';
// import React from 'react';

// interface fetchDataTypes{

// }
// const ExcelData = (url:string,) => {
//   const [products, setProducts] = React.useState([]);

//   React.useEffect(() => {
//     const fetchData=async()=>{
//         const res=await fetch(url);
//         const data=await res.json()
//         setProducts(data)

//     }
//     fetchData()
//     // axios.get('/api/products')
//     //   .then(res => setProducts(res.data))
//     //   .catch(err => console.error(err));
//   }, []);

//   return (
//     <ul>
//      {products.map((product)=>(
//         <table>

//         </table>
//      ))}
//     </ul>
//   );
// };

// export default ExcelData;
