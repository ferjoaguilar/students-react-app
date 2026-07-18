import { useForm } from "react-hook-form"
import Navbar from '../../components/Navbar/Navbar'
import styles from './Login.module.css'


const Login = () => {


    // Inicializamos react-hook-form
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        console.log("Login recibido", data)
    }

    return (
        <>
            <Navbar />
            <main className={styles.pageContainer}>
                <div className={styles.formCard}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Iniciar Sesión</h1>
                        <p className={styles.subtitle}>Ingresa tus credenciales para acceder a la plataforma</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                            <input
                                type="text"
                                id='email'
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                placeholder="Escribe tu email"
                                {...register('email', {
                                    required: "El email es obligatorio",
                                    validate: (value) => {
                                        const domain = value.split('@')[1];
                                        const allowedDomains = ['gmail.com', 'outlook.es', 'hotmail.com'];

                                        return allowedDomains.includes(domain) || "Solo se aceptan correos de gmail.com, outlook.es o hotmail.com";
                                    }
                                })}
                            />
                            {
                                errors.email && (
                                    <span className={styles.errorMessage}>{errors.email.message}</span>
                                )
                            }
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>Contraseña</label>
                            <input
                                type="password"
                                id='password'
                                className={styles.input}
                                placeholder="••••••••"
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