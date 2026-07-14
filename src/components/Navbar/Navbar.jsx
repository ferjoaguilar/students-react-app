// Navbar.jsx
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logotipo alineado a las especificaciones tipográficas de M3 */}
            <Link to="/" className={styles.logo}>
                CORE
            </Link>

            {/* Contenedor de enlaces */}
            <div className={styles.navLinks}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ''}`}
                >
                    {({ isActive }) => (
                        <>
                            {/* Solo renderiza la píldora activa si la ruta coincide */}
                            {isActive && <div className={styles.activePill} />}
                            <span>Inicio</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ''}`}
                >
                    {({ isActive }) => (
                        <>
                            {isActive && <div className={styles.activePill} />}
                            <span>Sobre nosotros</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/create-account"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ''}`}
                >
                    {({ isActive }) => (
                        <>
                            {isActive && <div className={styles.activePill} />}
                            <span>Crear cuenta</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ''}`}
                >
                    {({ isActive }) => (
                        <>
                            {isActive && <div className={styles.activePill} />}
                            <span>Iniciar Sesion</span>
                        </>
                    )}
                </NavLink>


            </div>
        </nav>
    )
}

export default Navbar
