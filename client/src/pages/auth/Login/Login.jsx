import FormAuth from "../../../components/layout/FormAuth/FormAuth";

const Login = ({ handleAuth }) => {
  return <FormAuth data="login" handleAuth={handleAuth} />;
};

export default Login;
