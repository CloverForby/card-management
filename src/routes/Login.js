import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setBusy(true);
        setError("");

        try {
            const res = await login({ username, password });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            localStorage.setItem("token", data.token);
            console.log("YEE")

            navigate("/cards");
        } catch (e2) {
            console.error(e2);
            console.log("WWWW")
            setError("Login failed");
        } finally {
        setBusy(false);
        }
    }

    return (

        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label for='UserInput'>Username</label>
                <br></br>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="UserInput" name="UserInput"/>
                <br></br>
                <label for='PassInput'>Password</label>
                <br></br>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="PassInput" name="PassInput"/>
                {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
                <br></br>
                <button className="button" disabled={busy} type="submit">{busy ? "Logging in..." : "Login"}</button>
            </form>
        </main>
    );
}