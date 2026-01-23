import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({windowName ,setWindowsState}) => {
  const [history, setHistory] = useState([
    "Welcome to Shivanshu’s CLI",
    "Type `help` to see available commands",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const commands = {
    help: () => [
      "Available commands:",
      "• help",
      "• about",
      "• clear",
      "• echo <text>",
    ],
    about: () => "Frontend Developer | React | UI Engineer",
    clear: () => "__CLEAR__",
    echo: (args) => args.join(" "),
  };

  const runCommand = (command) => {
    const [cmd, ...args] = command.trim().split(" ");
    const action = commands[cmd];

    if (!action) {
      return `command not found: ${cmd}`;
    }

    const result = action(args);
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = runCommand(input);

    if (output === "__CLEAR__") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        `ShivanshuNigam:~$ ${input}`,
        ...(Array.isArray(output) ? output : [output]),
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli">
        <div className="output">
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="input-line">
          <span className="prompt">ShivanshuNigam:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </MacWindow>
  );
};

export default Cli;
