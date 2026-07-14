import Navbar from '../../components/Navbar/Navbar'
import styles from './Login.module.css'

const Login = () => {
    return (
        <>
            <Navbar />
            <main className={styles.pageContainer}>
                <div className={styles.formCard}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Iniciar Sesión</h1>
                        <p className={styles.subtitle}>Ingresa tus credenciales para acceder a la plataforma</p>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                            <input
                                type="email"
                                id='email'
                                className={styles.input}
                                placeholder="ejemplo@correo.com"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>Contraseña</label>
                            <input
                                type="password"
                                id='password'
                                className={styles.input}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button type='submit' className={styles.submitButton}>
                            Entrar
                        </button>

                        <div className={styles.footerLinks}>
                            <a href="#" className={styles.link}>¿Olvidaste tu contraseña?</a>
                            <p>¿No tienes cuenta? <a href="#" className={styles.link}>Regístrate aquí</a></p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login