import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

export default function TerrorRouter() {

    const { url } = useRouteMatch();

    return (

        <div>
        <ul>
            <li>
                <NavLink exact to={`${url}`} activeClassName="active">
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to={`${url}/gore`} activeClassName="active">
                    Gore
                </NavLink>
            </li>
            <li>
                <NavLink to={`${url}/suspense`} activeClassName="active">
                    Suspense
                </NavLink>
            </li>
        </ul>

        <Switch>
            <Route exact path={`${url}`} >
                <h3>Category terror</h3>
            </Route>
            <Route exact path={`${url}/gore`}>
                <h3>Gore</h3>
            </Route>
            <Route exact path={`${url}/suspense`}>
                <h3>Suspense</h3>
            </Route>
            <Route path="*">
                    <Redirect to="/404" />
                </Route>
        </Switch>
        </div>
    );
}