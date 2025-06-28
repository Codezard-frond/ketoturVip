import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { useGoogleProvider } from "../hooks/useGoogleProvider";

function Login() {
  const { data, isPending, login } = useLogin();
  const {
    data: googleData,
    googleProvider,
    isPending: googleisPanding,
  } = useGoogleProvider();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };

  return (
    <section>
      <div className="login-register-wrapper">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="absolute md:hidden left-0 top-0 bottom-0 w-full bg-black opacity-50 z-10"></div>
          <form
            onSubmit={handleSubmit}
            className="max-w-96 w-full relative z-20"
          >
            <h2 className="text-3xl text-center font-bold text-white">Login</h2>
            <FormInput type="email" name="email" label="Email" />
            <FormInput type="password" name="password" label="Password" />

            <div className="flex items-center gap-5 mt-7 mb-7">
              <button
                type="submit"
                className="btn btn-primary btn-outline grow"
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Login"}
              </button>
              <button
                onClick={googleProvider}
                type="button"
                disabled={googleisPanding}
                className="btn btn-secondary btn-outline grow"
              >
                {googleisPanding ? "Loading..." : "Google"}
              </button>
            </div>
            <p className="text-center opacity-75 text-white">
              If you don't have an account{" "}
              <Link className="link link-primary" to="/register">
                register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
