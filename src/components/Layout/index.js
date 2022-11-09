import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
