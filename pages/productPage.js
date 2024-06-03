import axios from 'axios'
import React from 'react'
const productPage = (props) => {
  return (
    <div>
      {/* {
        props.productData.map(item=>{
          return <h1>{item.name}</h1>
        })
      } */}
    </div>
  )
}

export default productPage

export async function getServerSideProps(){
  const product = await axios.get("http://80.75.14.90:9090/products")
  const productData = await product.data
  return{
    props:{productData}
  }
}
