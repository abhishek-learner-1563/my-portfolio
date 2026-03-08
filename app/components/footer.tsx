const Footer = () => {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-900 text-center py-4">
            <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;