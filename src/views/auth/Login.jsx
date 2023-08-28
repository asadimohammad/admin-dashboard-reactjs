// @ts-nocheck
import React, { useEffect } from "react";
import avatar from "#assets/images/avatar.svg";
import {
    Link,
    redirect,
    useActionData,
    useNavigate,
    useNavigation,
    useParams,
    useRouteError,
    useSubmit,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { httpRequsts } from "../../services/http-requests";
import axios from "axios";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = useSubmit();
    const onsubmitHandle = (data) => {
        submitForm(data, { method: "POST" });
    };

    const actionData = useActionData();
    const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state !== "idle";

    const errorRouter = useRouteError();

    // useEffect(() => {
    //     if (actionData) {
    //         setTimeout(() => {
    //             navigate("/");
    //         }, 3000);
    //     }
    // });

    const { t } = useTranslation();

    return (
        <form className="login" onSubmit={handleSubmit(onsubmitHandle)}>
            <img src={avatar} alt="" />
            <h2 className="title mb-6">{t("login.title")}</h2>
            <div
                className={`input-div one ${errors.username ? "invalid" : ""}`}
            >
                <div className="div">
                    <input
                        type="text"
                        {...register("username", {
                            required: t("login.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("login.mobile")}</h5>
                </div>
                {errors.username && (
                    <p className="text-error p-absolute my-2">
                        {errors.username.message}
                    </p>
                )}
            </div>

            <div
                className={`input-div pass ${errors.password ? "invalid" : ""}`}
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
                        {errors.password?.message}
                    </p>
                )}
            </div>
            <a href="#" className="forget-pass my-4">
                {t("login.forgotenPass")}
            </a>
            {actionData ? (
                <p className="alert alert-success text-success my-6 p-3">
                    {t("login.isSubmitting")}
                </p>
            ) : (
                <input
                    type="submit"
                    className="btn mt-5"
                    value={
                        isSubmitting
                            ? t("login.actionBtn")
                            : t("login.loginBtn")
                    }
                />
            )}
            {errorRouter && (
                <div>
                    {errorRouter.response?.map((error) => (
                        <p className="alert alert-danger text-danger my-6 p-3">
                            {error.description}
                        </p>
                    ))}
                </div>
            )}
            <Link to="/register" className="btn btn-register">
                {t("login.changeToRegisterForm")}
            </Link>
        </form>
    );
};

export default Login;

export const actionLogin = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    let response = await httpRequsts.post("auth/login" , data)
    if(response.status === 200 ) {
        localStorage.setItem('token' , response?.data.token)
        return redirect('/')
    }
};
