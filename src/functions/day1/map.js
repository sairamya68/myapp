export const ButtonComponent =()=>{
   return <button>click me</button>;
 }



// export const Order=()=>{
//     return (
//       <ol>
//         <Listitems/>
//       </ol>
//     )
//   };
  
  // export const Unorder=()=>{
  //   return (
  //     <ul>
  //       <Listitems/>
  //     </ul>
  //   )
  // };
  
  export const ImageComponent=()=>{
    return (
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s" 
     width={100}
     height={100}
     alt="shirt"/>
    )
  };
  const Listitems=()=>{
    return (
     <div>
     <li>       apple
     </li>
        <li>bannana</li>
       </div>
    )
  };