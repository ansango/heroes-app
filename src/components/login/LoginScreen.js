import { useAuth } from "../../auth/AuthProvider";
import { Container } from "../ui/Container";

export const LoginScreen = ({ history }) => {
  const { login } = useAuth();
  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login({ payload: { logged: true, name: "Anibal" } });
    history.replace(lastPath);
  };
  return (
    <Container>
      <div className="py-5">
        <h1>Login</h1>
        <hr />

        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </Container>
  );
};
