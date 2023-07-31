import React from "react";
interface IHeaderPart {
  className: string;
}

function HeaderPart({ className }: IHeaderPart) {
  return <header className={className}>header</header>;
}

export default HeaderPart;
