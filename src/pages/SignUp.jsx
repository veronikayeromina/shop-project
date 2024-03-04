import LoginWithLabel from "../components/LoginWithLabel";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../constans/signUpValidation";
import { ROUTES } from "../constans/routes";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  console.log({ errors });

  return (
    <div className="login_container">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="login_wrapper signup-form"
      >
        <h4 className="login_title">Sign Up</h4>

        <div className="input_group">
          <LoginWithLabel
            {...register("first_name")}
            error={errors.first_name?.message}
            title="First Name"
            type="text"
          />
          <LoginWithLabel
            {...register("last_name")}
            error={errors.last_name?.message}
            title="Last Name"
            type="text"
          />
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
          <button className="input_button">Sign Up</button>
          <Link to={ROUTES.login} className="input_btn">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
