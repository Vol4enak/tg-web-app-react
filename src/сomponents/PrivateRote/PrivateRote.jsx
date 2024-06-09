import { Route } from "react-router-dom";
import { redirect } from "react-router-dom";
<redirect to="/login" />;

export default function PrivateRoute({ children, ...routePrors }) {
  return <Route {...routePrors}>{children}</Route>;
}
