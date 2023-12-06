const Footer = () => {
    return (
        <footer className="footer page-footer green darken-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/ar4ibais/react-food">Repo</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;