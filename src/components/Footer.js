import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 container border-t text-center text-gray-500"
    >
      This is an&nbsp;
      <a
        href="https://github.com/ahangarha/MV-Bookstore"
        className="text-blue-500 underline"
      >
        AGPL licensed
      </a>
      &nbsp;project.
    </footer>
  );
}
