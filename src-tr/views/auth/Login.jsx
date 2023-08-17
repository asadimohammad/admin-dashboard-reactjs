// @ts-nocheck
import React, { useEffect } from "react";
import "../../assets/styles/auth.css";
import { useTranslation } from "react-i18next";

import avatar from "../../assets/images/avatar.svg";
import {
    Link,
    redirect,
    useActionData,
    useNavigate,
    useNavigation,
    useRouteError,
    useSubmit,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { httpService } from "../../services/http-request";

const LoginRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = useSubmit();

    const onSubmitForm = (data) => {
        submitForm(data, { method: "post" });
    };

    const navigation = useNavigation();
    const isSubmitting = navigation.state !== "idle";

    const isSuccessOperation = useActionData();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccessOperation) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [isSuccessOperation]);

    const errorRoutes = useRouteError();

    const { t } = useTranslation();

    return (

            <form className="login" onSubmit={handleSubmit(onSubmitForm)}>
                <img src={avatar} alt="" />
                <h2 className="title mb-6">{t("login.title")}</h2>
                <div className={`input-div one ${errors.mobile && "invalid"}`}>
                    <div className="div">
                        <input
                            {...register("mobile", {
                                required: t("login.errors.required"),
                            })}
                            type="text"
                            className="input py-2 px-6"
                        />
                        <h5>{t("login.mobile")}</h5>
                    </div>
                    {errors.mobile && (
                        <p className="text-error p-absolute my-2">
                            {t("login.errors.mobileError")}
                        </p>
                    )}
                </div>
                <div
                    className={`input-div pass ${errors.password && "invalid"}`}
                >
                    <div className="div">
                        <input
                            {...register("password", {
                                required: t("login.errors.required"),
                            })}
                            type="password"
                            className="input py-2 px-6"
                        />
                        <h5>{t("login.password")}</h5>
                    </div>
                    {errors.password && (
                        <p className="text-error p-absolute my-2">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <a href="#" className="forget-pass my-4">
                    {t("login.forgotenPass")}
                </a>
                {/* <input type="submit" className="btn" value={t("login.loginBtn")} /> */}
                <input
                    type="submit"
                    className="btn mt-5"
                    disabled={isSubmitting}
                    value={
                        isSubmitting
                            ? t("login.actionBtn")
                            : t("login.loginBtn")
                    }
                />

                <Link to="/register" className="btn btn-register">
                    {t("login.changeToRegisterForm")}
                </Link>
                {isSuccessOperation && (
                    <p className="alert alert-success text-success my-6 p-3">
                        در حال انتقال به داشبورد هستید
                    </p>
                )}
                {errorRoutes && (
                    <p className="alert alert-danger text-danger my-6 p-3">
                        {errorRoutes.response?.data.map((error) => (
                            <p>{error.code}</p>
                        ))}
                    </p>
                )}
            </form>

    );
};

export default LoginRegister;

export async function loginAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data)
    const response = await httpService.post("/users/login", data);
    console.log(response);
    if (response.status === 200) {
        localStorage.setItem("token", response?.data.token);
    }
    // return redirect("/");
    return response.status === 200
}
