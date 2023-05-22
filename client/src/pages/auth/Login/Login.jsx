import FormAuth from "../../../components/layout/FormAuth/FormAuth";

const Login = ({ handleAuth }) => {
  return <FormAuth formType="login" handleAuth={handleAuth} />;
};

export default Login;
