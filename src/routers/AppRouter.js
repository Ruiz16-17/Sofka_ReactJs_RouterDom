import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import DashBoardPage from '../pages/DashBoardPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import PaymentsPage from '../pages/PaymentsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
import CategoriesRouter from './CategoriesRouter'
import PrivateRouter from './PrivateRouter'
import PublicRoute from './PublicRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>

                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/contact" component={ContactPage} />

                <Route exact path="/profile/:username" component={ProfilePage} />

                <Route path="/categories" component={CategoriesRouter} />

                <Route exact path="/signin">
                    <Redirect to="/login" />
                </Route>

                <PublicRoute exact path="/login" component={LoginPage} />

                <PublicRoute exact path="/register" component={RegisterPage} />

                <PrivateRouter exact path="/dashboard" component={DashBoardPage} />

                <PrivateRouter exact path="/payments" component={PaymentsPage} />

                <Route exact path="/" component={HomePage} />

                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
