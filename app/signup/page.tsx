const SignupPage = () => {
    return (
        <main className="w-full max-w-md p-8 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">Create your account</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create account
                </button>
            </form>
        </main>
    );
};

export default SignupPage;