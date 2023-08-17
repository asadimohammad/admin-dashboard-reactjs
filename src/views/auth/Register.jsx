// @ts-nocheck
import React, { useEffect } from "react";
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
import { httpRequsts } from "../../services/http-requests";

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
        submitForm(data, { method: "POST" });
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

            <div className={`input-div one ${errors.username ? "invalid" : ""}`}>
                <div className="div">
                    <input
                        type="text"
                        {...register("username", {
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
                className={`input-div confirmPassword ${
                    errors.username ? "invalid" : ""
                }`}
            >
                <div className="div">
                    <input
                        {...register("confirmPassword", {
                            required: t("register.errors.required"),
                            validate: (value) => {
                                if (watch("password") !== value) {
                                    return t(
                                        "register.errors.validateConfirmPass"
                                    );
                                }
                            },
                        })}
                        type="password"
                        className="input py-2 px-6"
                    />
                    <h5>{t("register.confirmPassword")}</h5>
                </div>
                {errors.confirmPassword && (
                    <p className="text-error p-absolute my-2">
                        {errors.confirmPassword?.message}
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
                    {errorRouter.response?.data.map((error) => (
                        <p className="alert alert-danger text-danger my-6 p-3">
                            {error.description}
                        </p>
                    ))}
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
    const response = await httpRequsts.post("/users", data);
    return response.status === 200;
};
