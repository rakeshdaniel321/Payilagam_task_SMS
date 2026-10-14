import React, { useState, useEffect } from "react";

function Home() {
  const initialStudents = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Java" },
    { id: 3, name: "Karthik", course: "React" },
    { id: 4, name: "Divya", course: "Playwright" },
  ];
  const [products, setProducts] = useState(initialStudents);
  
  console.log(products);
   function searchFilter(){
    
   }
   function removeProd(item){
    let currentItem =item.id;
    const updatedFruits = products.filter(item => item.id !== currentItem);
    setProducts(updatedFruits);
   }
   

  return (
    <main id="main">
        <section id="SMS-titile">STUDENT MANAGEMENT DASHBOARD</section>
        <section >
            <span id="len">Total Students: {products.length}</span>
        </section>
      <table id="product-contanier">
        <thead id="product-thead">
        
          <th className="table-row">ID</th>
          <th className="table-row">Name</th>
          <th className="table-row">Crouse</th>
          <th className="table-row">Action</th>
          {products.map((item) => (
            <tr key={products.id}>
              <td className="table-cloumn">{item.id}</td>
              <td className="table-cloumn">{item.name}</td>
              <td className="table-cloumn">{item.course}</td>
              <button onClick={()=>removeProd(item)}>Delete</button>
            </tr>
          ))}
          
        </thead>
        
      </table>
    </main>
  );
}

export default Home;
