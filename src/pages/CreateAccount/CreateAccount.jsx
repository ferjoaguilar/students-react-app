import { useForm } from "react-hook-form"
import Navbar from '../../components/Navbar/Navbar'
import styles from './CreateAccount.module.css'

const CreateAccount = () => {

    // Inicializamos react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm()

    // Solo se ejectuca si TODOS los campos pasan las validaciones
    const onSubmit = (data) => {
        console.log('Cuenta creada', data)
    }


    return (
        <>
            <Navbar />
            <main className={styles.pageContainer}>
                <div className={styles.formCard}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Crear nueva cuenta</h1>
                        <p className={styles.subtitle}>Creación de nueva cuenta para nuevos estudiantes</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                        <div className={styles.inputGroup}>
                            <label htmlFor="studentCode" className={styles.label}>Código de estudiante</label>
                            <input
                                type="text"
                                id='studentCode'
                                className={`${styles.input} ${errors.studentCode ? styles.inputError : ""}`}
                                {...register("studentCode", {
                                    required: "El codigo de estudiante es obligatorio",
                                    pattern: {
                                        value: /^STU-\d{4}-\d{4}$/,
                                        message: "Formato invalido, debe ser STU-AAAA-0000"
                                    }
                                })}
                            />

                            {
                                errors.studentCode && (
                                    <span className={styles.errorMessage}>{errors.studentCode.message}</span>
                                )
                            }


                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="firstName" className={styles.label}>Nombres completos</label>
                            <input type="text" id='firstName' className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="lastName" className={styles.label}>Apellidos</label>
                            <input type="text" id='lastName' className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                            <input type="email" id='email' className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>Contraseña</label>
                            <input type="password" id='password' className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Número telefónico</label>
                            <input type="tel" id='phone' className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="birthDate" className={styles.label}>Fecha de nacimiento</label>
                            <input type="date" id='birthDate' className={styles.input} />
                        </div>

                        <button type='submit' className={styles.submitButton}>
                            Crear nueva cuenta
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CreateAccount