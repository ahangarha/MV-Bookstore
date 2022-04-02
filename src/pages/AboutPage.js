import React from 'react';

export default function AboutPage() {
  return (
    <section className="bg-white border rounded p-4">
      <h2 className="text-gray-500 font-serif font-bold uppercase">
        About this project
      </h2>
      <p className="my-3">
        This is an educational project to practice the following tools and
        techniques:
      </p>
      <ul className="list-disc pl-8">
        <li>ReactJS</li>
        <li>ReduxJS</li>
        <li>React Router</li>
        <li>Redux Middleware</li>
        <li>API calls</li>
        <li>Tailwindcss in React app</li>
      </ul>
      <p className="my-3">
        This project is a Free/Libre software released under AGPL license. The
        source code is available on&nbsp;
        <a href="https://github.com/ahangarha/MV-Bookstore" className="text-blue-500 underline">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
