// pages/api/login.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  // Your login logic here, validate credentials, etc.
  const { email, password } = req.body;
  // Perform authentication and retrieve user data
  const user = { email: "user@example.com", name: "John Doe" };

  return res.status(200).json({ user });
}
