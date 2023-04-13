import React from 'react'

const Nav = () => {
  const [sidebar, setSidebar]= useState(false)
  return (
    <>
      <header>
        <div className="container flexx">
          <div className="logo">
            <h1>fiug<span>gjhy</span></h1>
          </div>
          <nav>
            <button className='toggle' onClick={() => setSidebar(!sidebar)}>
              {sidebar?<i className='fas fa-bars'></i>:<i className='fas fa-times'></i>}
            </button>
           <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Creative</a></li>
            <li><a href="/">Education</a></li>
            <li><a href="/">Works</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>


           </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
