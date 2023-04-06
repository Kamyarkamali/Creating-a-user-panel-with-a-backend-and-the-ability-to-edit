import Link from 'next/link'
import React from 'react'

function Layout({children}) {
  return (
    <>
        <header className='header'>
        <h1>User Dashboard</h1>
        <Link href="/add-customer">Add Customer</Link>
        </header>

        <div className='main'>{children}</div>

    <footer className='footer'>
        <a href='/#' target='_blank' rel='noreferrer'>Next js Project</a>
    </footer>
    
    </>
  )
}

export default Layout