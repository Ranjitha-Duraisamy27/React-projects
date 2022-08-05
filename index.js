function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <header className="container">
                <a href="#" className="navbar-brand">Header</a>
            </header>
        </nav>
    )
}

function MainContent() {
    return (
        <main className="container py-3">
            <article>
                Main Content
            </article>
        </main>
    );
}


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById('root')
);