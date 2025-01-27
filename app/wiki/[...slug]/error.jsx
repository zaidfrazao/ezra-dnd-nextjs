"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <p style={messageStyle}>The page you are looking for does not exist.</p>
      <Link href="/dashboard" passHref>
        <button style={buttonStyle}>Go Back to Home</button>
      </Link>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "white",
  color: "#212529",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const messageStyle = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "grey",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
