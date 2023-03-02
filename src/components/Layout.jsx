import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header>
            <div className='logo'>
                <CustomLink to="/">♡</CustomLink>
            </div>
            <div className='nav'>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/clock">CLOCK</CustomLink>
                <CustomLink to="/timer">TIMER</CustomLink>
                <CustomLink to="/todo">TO DO</CustomLink>
            </div>
        </header>
        <main className="container">
            <Outlet /> 
        </main>
        </>
    )
}

export {Layout}