// pages/Auth/login.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here (e.g., validate credentials)
        console.log("User logged in:", { email, password });
        // Redirect user to dashboard after successful login
        router.push("/dashboard");
    };

    return (
        <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Password"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
        
    );
};

export default Login;
