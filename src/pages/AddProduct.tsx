import React from 'react'
import Title from '../components/header/Title'
import NewProduct from '../components/Product/NewProduct'
import VerticalTabs from '../components/tabs/VerticalTabs'

const AddProduct: React.FC = () => {
    return (
        <React.Fragment>
            <Title title="Add Product" subtitle="Create a New Product" />

            <NewProduct />
            {/* <VerticalTabs /> */}
        </React.Fragment>
    )
}

export default AddProduct