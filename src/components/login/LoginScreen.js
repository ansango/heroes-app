import { useAuth } from "../../auth/AuthProvider";

export const LoginScreen = ({ history }) => {
  const { login } = useAuth();
  const handleLogin = () => {
    login({ payload: { logged: true, name: "Anibal" } });
    history.replace("/");
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
