///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1 EVENT HANDLING 


// import React from 'react'

// function Basics() {
//   const handleClick=()=>{
//     alert('hai here')
//   }
//   return (
//     <div>
//       <button onClick={handleClick()}>Click me</button>
//     </div>
//   )
// }

// export default Basics


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2 CONDITIONAL RENDERING 

import  { useEffect, useState } from 'react'

function Basics() {
  const [bool, boolFunc]=useState(false)
  useEffect(()=>{
    boolFunc(!bool)
  },[])


  return (
    <div>
      {bool ? <p>HAI HERE</p> : <p>sorry</p>}
      <button onClick={() =>boolFunc(b => !b)} className='btn bg-black text-white'>Click to change text</button>
    </div>
  )
}

export default Basics

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3 LIST AND KEYS 


// import React from 'react'

// function Basics() {
//   const users = ['ajmal', 'waris', 'najas'];

//   return (
//     <ul>
//       {users.map((value,index)=>{
//        return <li key={index}>{value}</li>
//       })}
//     </ul>
//   )
// }

// export default Basics






// import React, { useState } from 'react';

// function ListItem({ text }) {
//   return <li>{text}</li>;
// }

// function ListComponent() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
//   const [inputValue, setInputValue] = useState('');

//   const addItem = () => {
//     if (inputValue.trim() !== '') {
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <ListItem key={index} text={item} />
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default ListComponent;
