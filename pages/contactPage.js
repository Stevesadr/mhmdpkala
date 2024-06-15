import Image from 'next/image'
import React from 'react'
import styles from '@/styles/contactPage.module.css'

const contactPage = () => {
  return (
    <div className={`${styles.outer_Container}`}  >
      <div className={`${styles.main_Container}`} >
      <div className={`${styles.image_Container}`}>
        <Image src="/images/contacct_Us.svg"  width={500}
        height={500}
        alt="Picture of the author"/>
      </div>
      <div className={`${styles.data_Container}`} > 
        <h3>Contacct Us</h3>
        <div className={`${styles.inputs_data_Container}`}>
        <input type='text' placeholder='Name'></input>
        <input type='email' placeholder='Email'></input>
        <textarea id="w3review" name="w3review"  placeholder='Message'/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Send Massage</button>


</div>
      </div>
      </div>
    </div>
  )
}

export default contactPage
