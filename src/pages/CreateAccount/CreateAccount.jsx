import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'
import styles from './CreateAccount.module.css'
import { createAccount } from "../../services/api"

const CreateAccount = () => {

    // Inicializamos react-hook-form
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

    const [submitError, setSubmitError] = useState(null)
    const [submitSuccess, setSubmitSucess] = useState(false)

    // Instancia del useNavigate
    const navigate = useNavigate()

    // Solo se ejectuca si TODOS los campos pasan las validaciones
    const onSubmit = async (data) => {
        //console.log('Cuenta creada', data)
        setSubmitError(null)
        setSubmitSucess(false)
        try {
            const result = await createAccount(data)
            console.log("Respues de api", result)
            setSubmitSucess(true)
            reset()
            navigate("/login", { replace: true })
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
                            <input
                                type="text"
                                id='firstName'
                                className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}
                                {
                                ...register('firstName', {
                                    required: "El nombre es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "El nombre debe tener al menos 2 caracteres"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "El nombre es demasiado largo"
                                    }
                                })
                                }
                            />
                            {
                                errors.firstName && (
                                    <span className={styles.errorMessage}>{errors.firstName.message}</span>
                                )
                            }
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="lastName" className={styles.label}>Apellidos</label>
                            <input
                                type="text"
                                id='lastName'
                                className={`${styles.input} ${errors.lastName ? styles.inputError : ""}`}
                                {
                                ...register('lastName', {
                                    required: "El apellido es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "El apellido debe tener al menos 2 caracteres"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "El apellido es demasiado largo"
                                    }
                                })
                                }
                            />
                            {
                                errors.lastName && (
                                    <span className={styles.errorMessage}>{errors.lastName.message}</span>
                                )
                            }
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                            <input
                                type="text"
                                id='email'
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
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

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Número telefónico</label>
                            <input
                                type="text"
                                id='phone'
                                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                                {...register('phone', {
                                    required: "El número telefónico es obligatorio",
                                    pattern: {
                                        // Acepta un '+' opcional al inicio, seguido de 8 a 15 números, permitiendo espacios o guiones.
                                        value: /^\+?[0-9\s\-]{8,15}$/,
                                        message: "Formato de número no válido"
                                    }
                                })}
                            />
                            {
                                errors.phone && (
                                    <span className={styles.errorMessage}>{errors.phone.message}</span>
                                )
                            }
                        </div>

                        {/* Fecha de nacimiento */}
                        <div className={styles.inputGroup}>
                            <label htmlFor="birthDate" className={styles.label}>
                                Fecha de nacimiento
                            </label>

                            <input
                                type="date"
                                id="birthDate"
                                className={`${styles.input} ${errors.birthDate ? styles.inputError : ""}`}
                                {...register("birthDate", {
                                    required: "La fecha de nacimiento es requerida",
                                    validate: (value) => {
                                        const birthDate = new Date(value);
                                        const today = new Date();

                                        // Calculamos la edad
                                        let age = today.getFullYear() - birthDate.getFullYear();

                                        const monthDifference =
                                            today.getMonth() - birthDate.getMonth();

                                        const dayDifference =
                                            today.getDate() - birthDate.getDate();

                                        // Si todavía no ha cumplido años este año, restamos 1
                                        if (
                                            monthDifference < 0 ||
                                            (monthDifference === 0 && dayDifference < 0)
                                        ) {
                                            age--;
                                        }

                                        return (
                                            age >= 18 ||
                                            "Debes ser mayor de edad (18 años o más) para registrarte"
                                        );
                                    },
                                })}
                            />

                            {errors.birthDate && (
                                <span className={styles.errorMessage}>
                                    {errors.birthDate.message}
                                </span>
                            )}
                        </div>

                        {
                            submitError && <span>{submitError}</span>
                        }
                        {
                            submitSuccess && <span>Cuenta creada con exito</span>
                        }

                        <button type='submit' className={styles.submitButton} disabled={isSubmitting}>
                            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CreateAccount