import LoginButton from "./loginButton";
import User from "./user";
import Link from "next/link";
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-zinc-100 dark:bg-zinc-900">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">My Portfolio</h1>
            <nav>
                <ul className="flex space-x-30">
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Projects</Link>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">About</Link>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</Link>
                </ul>
            </nav>
            {/* <User /> */}
            <Link href="/login" >
                <LoginButton />
            </Link>
        </header>
    );
}

export default Header