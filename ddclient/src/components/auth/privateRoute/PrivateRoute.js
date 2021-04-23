export default function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest} render={() => {
            return fakeAuth.isAuthenticated === true
                ? children
                : <Redirect to="/Login" />
        }} />
    )
}