import { Component } from "react";

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("Component");
      }}
    >
      button
    </button>
  );
}
