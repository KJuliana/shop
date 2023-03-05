import React from 'react';
import Layout from "../../components/Layout/Layout";
import CatalogList from "../../components/Catalog/Catalog";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";

const Catalog = () => {
    return (
        <Layout>
            <CategoryMenu/>
            <CatalogList/>
        </Layout>
    );
};

export default Catalog;
