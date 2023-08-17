// @ts-nocheck
import React, { useEffect } from "react";
import { Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit } from "react-router-dom";
import avatar from "#assets/images/avatar.svg";
import "#assets/styles/auth.css";
import { useForm } from "react-hook-form";
import { httpService } from "../../services/http-request";
import { useTranslation } from "react-i18next";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const submitForm = useSubmit();

    const navigation = useNavigation()
    const isSubmitting = navigation.state !== 'idle'

    // This call when registerAction return a response
    const isSuccessOperation = useActionData()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isSuccessOperation)  {
            setTimeout(() => {
                navigate('/login')            
            }, 2000);
        }
    } , [isSuccessOperation])

    const onSubmitHandler = (data) => {
        const {confirmPassword , ...userData} = data
        submitForm(userData, { method: "post" });
    };

    const errorRoutes = useRouteError()

    const {t} = useTranslation()

    return (
        <form className="register" onSubmit={handleSubmit(onSubmitHandler)}>
            <img src={avatar} alt="" />
            <h2 className="title mb-6">{t('register.title')}</h2>

            <div className={`input-div one ${errors.mobile && "invalid"}`}>
                <div className="div">
                    <input
                        {...register("mobile", {
                            required: t('register.errors.required'),
                        })}
                        type="text"
                        className="input py-2 px-6"
                    />
                    <h5>{t('register.mobile')}</h5>
                </div>
                {errors.mobile && (
                    <p className="text-error p-absolute my-2">
                        {t('register.errors.mobileError')}
                    </p>
                )}
            </div>

            <div className={`input-div pass ${errors.password && "invalid"}`}>
                <div className="div">
                    <input
                        {...register("password", {
                            required: t('register.errors.required'),
                            minLength: {
                                value: 5,
                                message: t('register.errors.passLengthError')
                            },
                        })}
                        type="password"
                        className="input py-2 px-6"
                    />
                    <h5>{t('register.password')}</h5>
                </div>
                {errors.password &&(
                    <p className="text-error p-absolute my-2">
                        {errors.password?.message}
                    </p>
                )}
            </div>

            <div className={`input-div confirmPassword ${errors.confirmPassword && "invalid"}`}>
                <div className="div">
                    <input
                        {...register("confirmPassword", {
                            required: t('register.errors.required'),
                            validate: value => {
                                if(watch('password') !== value) {
                                    return t('register.errors.validateConfirmPass')
                                }
                            }
                        })}
                        type="password"
                        className="input py-2 px-6"
                    />
                    <h5>{t('register.confirmPassword')}</h5>
                </div>
                {errors.confirmPassword  &&(
                    <p className="text-error p-absolute my-2">
                        {errors.confirmPassword?.message}
                    </p>
                )}
            </div>

            <input type="submit" className="btn mt-5" disabled={isSubmitting} value={isSubmitting ? 'در حال انجام عملیات' : 'ثبت نام'} />
            {/* <input type="submit" className="btn mt-5" disabled={isSubmitting} value={t('register.registerBtn')} /> */}
            <Link to="/login" className="btn btn-register">
                {t('register.changeToLoginForm')}
            </Link>
            {
                isSuccessOperation && <p className="alert alert-success text-success my-6 p-3">عملیات با موفقیت انجام شد. در حال انتقال به صفحه ورود هستید</p>
            }
             {
                errorRoutes && <p className="alert alert-danger text-danger my-6 p-3">
                    {errorRoutes.response?.data.map(error => <p>{error.code}</p>)}
                </p>
                
            }
        </form>
    );
};

export default Register;

// this function will call when form is submitting
export async function registerAction({ request }) {
    const formData = await request.formData();
    // convert formData to an Object
    const data = Object.fromEntries(formData);
    const response = await httpService.post("/users", data);
    return response.status === 200;
}

