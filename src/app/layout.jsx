import React from "react";
import "@styles/globals.css";
export const metadata = {
  title: "prompt4u",
  description: "Discover & Share The Prompt",
};
function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default Rootlayout;
