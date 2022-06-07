import '../App.css';

function AppHeader() {
    return (
        <header className="app-header">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                        <img className='logo' src="https://devfast.us/images/devfast-logo.png" alt="Devfast logo" />
                    </a>
                </div>
                <div className="navbar-collapse">
                    <h2 className='main-title'>Blogmanagement</h2>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;