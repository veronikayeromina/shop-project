import LoginWithLabel from "../components/LoginWithLabel";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../constans/loginValidation";
import { ROUTES } from "../constans/routes";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="login_container">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="login_wrapper"
      >
        <h4 className="login_title">Login</h4>

        <div className="input_group">
          <LoginWithLabel
            {...register("email")}
            error={errors.email?.message}
            title="Email Address"
            type="text"
          />
          <LoginWithLabel
            {...register("password")}
            error={errors.password?.message}
            title="Password"
            type="password"
          />
        </div>

        <div className="input_button_group">
          <button className="input_button">Login</button>
          <Link to={ROUTES.signup} className="input_btn">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
