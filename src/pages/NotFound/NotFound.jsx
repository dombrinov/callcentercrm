import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { Layout } from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Layout>
      <Navigation />
      <div>
        <Link to="/">go to Home</Link>
      </div>
    </Layout>
  );
};
