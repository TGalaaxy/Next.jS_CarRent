// components/Layout.js
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Car Rent</title>
                {/* You can add meta tags, favicon, etc. here if needed */}
            </Head>
            <header>
                {/* Your header content can go here, like a navbar */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Your footer content can go here */}
            </footer>
        </>
    );
};

export default Layout;
