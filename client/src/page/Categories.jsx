import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategroy";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div
        className=" container-fluid d-flex flex-wrap justify-content-center"
        style={{ marginTop: "100px" }}
      >
        {categories.map((c) => (
          <Link
            key={c._id}
            to={`/category/${c.slug}`}
            className="m-3 btn cat-btn"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
