import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'
import styles from './Login.module.css'
import { login } from "../../services/api"


const Login = () => {


    // Inicializamos react-hook-form
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const [submitError, setSubmitError] = useState(null)
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        setSubmitError(null)
        try {
            const result = await login(data)
            //console.log('Login exitoso', result)
            localStorage.setItem("token", result.token)
            navigate("/dashboard", { replace: true })

        }
        catch (error) {
            setSubmitError(error.message)
        }
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
                                className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
                                {...register('password', {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener al menos 8 caracteres"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial"
                                    }
                                })}
                            />
                            {
                                errors.password && (
                                    <span className={styles.errorMessage}>{errors.password.message}</span>
                                )
                            }
                        </div>

                        {
                            submitError && <span>{submitError}</span>
                        }

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