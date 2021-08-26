import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { LoginScreen } from "../components/login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { user } = useAuth();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuth={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
