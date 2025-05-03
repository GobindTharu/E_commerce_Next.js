import React from "react";
import Form from "./components/Form";
import ListView from "./components/ListView";

const page = () => {
  return (
    <main className="p-4 flex flex-col md:flex-row gap-5">
      <Form />
      <ListView />
    </main>
  );
};

export default page;
