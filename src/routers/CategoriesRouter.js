import { useRouteMatch } from 'react-router';
import { NavLink, Route, Switch } from 'react-router-dom';
import CategoriesPage from '../pages/CategoriesPage';
import PrivateRouter from './PrivateRouter';
import TerrorRouter from './TerrorRouter';

export default function CategoriesRouter() {

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
                    <NavLink to={`${url}/terror`} activeClassName="active">
                        Category terror
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/action`} activeClassName="active">
                        Category action
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/anime`} activeClassName="active">
                        Category anime
                    </NavLink>
                </li>
            </ul>

            <Switch>

                <Route exact path={`${url}`} component={CategoriesPage} />

                <PrivateRouter path={`${url}/terror`} component={TerrorRouter} />

                <Route exact path={`${url}/action`}>
                    <h1>Category action</h1>
                </Route>

                <Route exact path={`${url}/anime`}>
                    <h1>Category anime</h1>
                </Route>

            </Switch>

        </div>
    )
}