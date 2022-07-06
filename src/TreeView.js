import React, { useState } from "react";
import "./styles.css";

export function TreeItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="list-item" onClick={() => setIsOpen(!isOpen)}>
        <div>{children ? (isOpen ? "-" : "+") : ""}</div>
        <div>{title}</div>
      </div>
      {isOpen && <div className="list-item-subtree">{children}</div>}
    </div>
  );
}

export function TreeView({ children }) {
  return <>{children}</>;
}
