import Card from '@/components/Card'
import axioseDataResponse from '@/config/axios'
import React from 'react'
const productPage = (props) => {
  return (
    <div>
   <Card/>
    </div>
  )
}

export default productPage
export async function getServerSideProps(){
  const productData = await axioseDataResponse("products")
  return{
    props:{productData}
  }
}