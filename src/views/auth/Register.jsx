// @ts-nocheck
import React, { useEffect, useState } from "react";
import avatar from "#assets/images/avatar.svg";
import {
    Link,
    useActionData,
    useNavigate,
    useNavigation,
    useRouteError,
    useSubmit,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
    httpInterceptedServices,
    httpRequsts,
} from "../../services/http-requests";

const Register = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const submitForm = useSubmit();
    const onsubmitHandle = (data) => {
        submitForm(data, { method: "POST"});
    };

    const errorRouter = useRouteError();

    const actionData = useActionData();
    const navigate = useNavigate();

    const navigationStatus = useNavigation();
    const isSubmitting = navigationStatus.state !== "idle";

    useEffect(() => {
        if (actionData) {
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
    });

    return (
        <form className="register" onSubmit={handleSubmit(onsubmitHandle)}>
            <img src={avatar} alt="" />
            <h2 className="title mb-6">{t("register.title")}</h2>

            <div className={`input-div one ${errors.fName ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("fName", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.fName")}</h5>
                </div>
                {errors.fName && (
                    <p className="text-error p-absolute my-2">
                        {errors.fName.message}
                    </p>
                )}
            </div>
            <div className={`input-div one ${errors.lName ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("lName", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.lName")}</h5>
                </div>
                {errors.lName && (
                    <p className="text-error p-absolute my-2">
                        {errors.lName.message}
                    </p>
                )}
            </div>
            <div className={`input-div one ${errors.email ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("email", {
                            required: t("register.errors.required"),
                            validate: {
                                maxLength: (v) => v.length <= 50,
                                matchPattern: (v) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                        v
                                    ) || t("register.errors.emailError"),
                            },
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.email")}</h5>
                </div>
                {errors.email && (
                    <p className="text-error p-absolute my-2">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className={`input-div one ${errors.mobile ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("mobile", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.mobile")}</h5>
                </div>
                {errors.mobile && (
                    <p className="text-error p-absolute my-2">
                        {errors.mobile.message}
                    </p>
                )}
            </div>
            <div
                className={`input-div one ${errors.userTitle ? "invalid" : ""}`}
            >
                <div className="div">
                    <input
                        type="text"
                        {...register("title", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.userTitle")}</h5>
                </div>
                {errors.userTitle && (
                    <p className="text-error p-absolute my-2">
                        {errors.userTitle.message}
                    </p>
                )}
            </div>
            <div className={`input-div one ${errors.skills ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("skills", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.skills")}</h5>
                </div>
                {errors.skills && (
                    <p className="text-error p-absolute my-2">
                        {errors.skills.message}
                    </p>
                )}
            </div>

            <div
                className={`input-div pass ${errors.password ? "invalid" : ""}`}
            >
                <div className="div">
                    <input
                        {...register("password", {
                            required: t("register.errors.required"),
                            minLength: {
                                value: 5,
                                message: t("register.errors.passLengthError"),
                            },
                        })}
                        type="password"
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.password")}</h5>
                </div>
                {errors.password && (
                    <p className="text-error p-absolute my-2">
                        {errors.password?.message}
                    </p>
                )}
            </div>

            <div
                className={`input-div one mt-2 ${
                    errors.image ? "invalid" : ""
                }`}
            >
                <div className="div mt-3">
                    <input
                        type="text"
                        {...register("image", {
                            required: t("register.errors.required"),
                        })}
                        className="input py-2 px-6 "
                    />
                    <h5>{t("register.image")}</h5>
                </div>
                {errors.image && (
                    <p className="text-error p-absolute my-2">
                        {errors.image.message}
                    </p>
                )}
            </div>

            {actionData ? (
                <p className="alert alert-success text-success my-6 p-3">
                    {t("register.isSubmitting")}
                </p>
            ) : (
                <input
                    type="submit"
                    className="btn mt-5"
                    value={
                        isSubmitting
                            ? t("register.actionBtn")
                            : t("register.registerBtn")
                    }
                />
            )}
            {errorRouter && (
                <div>
                    <p className="alert alert-danger text-danger my-6 p-3">
                        {errorRouter.response.message}
                    </p>
                </div>
            )}
            <Link to="/login" className="btn btn-register">
                {t("register.changeToLoginForm")}
            </Link>
        </form>
    );
};

export default Register;

export const actionRegister = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await httpInterceptedServices.post("/signup", data);
    console.log(response);
    return response.status === 200;
};
