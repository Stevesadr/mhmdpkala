import Link from 'next/link'
import React, { memo } from 'react'

const NavbarResponsiveCollapse = (props) => {
  return (
    <nav className='flex justify-between items-center gap-3 align-middle flex-col'>
        {
            props.data.map(item=>{
                return <Link href={'/'} className="text-center block hover:text-cyan-900 text-slate-100">{item.name}</Link>
            })
        }
    </nav>
  )
}

export default memo(NavbarResponsiveCollapse)
