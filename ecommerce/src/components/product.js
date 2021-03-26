import React from 'react';

const items = [
  
    {
    id:100, 
    title:"Fast track",
    img: "./product-images/img1.jpeg",
    price:500
    },
    {
    id:101, 
    title:"Sonata",
    img: "./product-images/img2.jpeg",
    price:500
    },
    {
    id:102, 
    title:"Titan",
    img: "./product-images/img3.jpeg",
    price:500
    }

]
class product extends React.Component{



render(){
    return(
        <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Product image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         { items.map(item => (
                <tr key={item.id} >
                  <td>{item.id}</td>
                  <td><div class ="zoom"><img src={item.img}  alt="products"/></div></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <div class= "cart"><td><button>Add to cart</button></td></div>
                  
                </tr>
          ))}
        </tbody>
      </table>
    )
}


}
export default product;