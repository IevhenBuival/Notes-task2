import React from "react";

interface IInputArea {
  title: string;
  children: React.ReactNode;
}

function InputArea({ title, children }: IInputArea) {
  return (
    <div className="mt-4">
      <p className="">{title}</p>
      {children}
    </div>
  );
}

export default InputArea;
