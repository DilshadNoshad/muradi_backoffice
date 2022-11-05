import React from 'react'
import Title from '../components/header/Title'
import ProductTabs from '../components/tabs/ProductTabs'

const AddProduct: React.FC = () => {
    return (
        <React.Fragment>
            <Title title="Add Product" subtitle="Create a New Product" />
            <ProductTabs />
        </React.Fragment>
    )
}

export default AddProduct