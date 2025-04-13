import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// 1. TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
      <input
        type="text"
        className="border border-gray-300 p-2 w-full rounded"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg font-medium">You typed: {text}</p>
    </div>
  );
};

// 2. ConsoleForm Component
const ConsoleForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Console Form</h2>
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto mt-4 p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// 4. CustomButton Component
const CustomButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="p-4 text-center">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Click Me
      </button>
    </div>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Login Form</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

// Main App Component with Navigation
const App = () => {
  const [selected, setSelected] = useState("text-updater");

  const renderComponent = () => {
    switch (selected) {
      case "text-updater":
        return <TextUpdater />;
      case "console-form":
        return <ConsoleForm />;
      case "user-card":
        return <UserCard name="John Doe" email="john@example.com" />;
      case "button":
        return <CustomButton />;
      case "login-form":
        return <LoginForm />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-center space-x-2 flex-wrap">
        <button onClick={() => setSelected("text-updater")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">TextUpdater</button>
        <button onClick={() => setSelected("console-form")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">ConsoleForm</button>
        <button onClick={() => setSelected("user-card")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">UserCard</button>
        <button onClick={() => setSelected("button")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Button</button>
        <button onClick={() => setSelected("login-form")} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">LoginForm</button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

// React 18 render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
