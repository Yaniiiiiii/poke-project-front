import { useAuth0 } from '@auth0/auth0-react';

export function LoginButton() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            {!isAuthenticated && (
                <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
            )}
            {isAuthenticated && (
                <>
                    <div className="auth">
                        <p className="auth__usermail">{user?.email}</p>
                    </div>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
