import Link from "next/link";
import React, { useId, useRef, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import styles from './NavbarResponsive.module.css'
import NavbarResponsiveCollapse from "./NavbarResponsiveCollapse";
import { RxMagnifyingGlass } from "react-icons/rx";
const NavbarResponsive = () => {
  const dataNavbar = [
    { id: 0, name: "محصولات" , adrress:'/productPage' },
    { id: 1, name: "سبدخرید" , adrress:'/shoppingBuyPage' },
    { id: 2, name: "تماس با ما" , adrress:'/contactPage' },
    { id: 3, name: "تخفیفات" , adrress:'/salePage' },
  ];
  const LinkNavbarId = useId()
  const sumbmitHandler =(e)=>{
    e.preventDefault()
    console.log(inputdata.current.value)
  }
  const inputdata =useRef()
  const flagChangeHandler =()=>{
    setflag(!flag)
  }
  const [flag, setflag] = useState(false)
  return (
    <nav className={` ${styles.navItem} flex flex-row items-center justify-between p-2 w-100 bg-sky-900`}>
        {dataNavbar.map((item) => {
          return <Link  key={LinkNavbarId} href={item.adrress} className="text-center hidden sm:flex hover:text-slate-950 text-slate-200 bg-sky-900">{item.name}</Link>;
        })}
               <form onSubmit={sumbmitHandler} className={`hidden sm:flex ${styles.formItem}`}>
          <input ref={inputdata} className="bg-sky-900  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
          <button type="submit" className="mr-3 text-2xl text-slate-100 hover:text-slate-950"><RxMagnifyingGlass/></button>
        </form>
       <div className={`${styles.divIcons} hidden`}><FiAlignJustify onClick={flagChangeHandler} className={` cursor-pointer text-3xl text-red-100 hover:text-slate-950  ${styles.iconNavbar}`}/></div> 

        {
          flag ? <NavbarResponsiveCollapse data={dataNavbar}/>:null
        }
        

    </nav>
  );
};

export default NavbarResponsive;
