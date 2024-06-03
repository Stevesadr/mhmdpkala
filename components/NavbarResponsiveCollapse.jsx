import Link from 'next/link'
import React from 'react'

const NavbarResponsiveCollapse = (props) => {
  return (
    <nav className='flex justify-between items-center gap-3 align-middle flex-col'>
        {
            props.data.map(item=>{
                return <Link href={'/'} className="text-center block hover:text-slate-950 text-slate-200 bg-sky-900">{item.name}</Link>
            })
        }
    </nav>
  )
}

export default NavbarResponsiveCollapse
