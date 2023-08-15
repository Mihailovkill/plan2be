import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // TODO: Implement your registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail*:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username*:</label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password*:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password*:</label>
        <input
          type="password"
          id="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
