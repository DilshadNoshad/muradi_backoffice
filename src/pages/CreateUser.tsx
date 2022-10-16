import React from 'react'
import UserForm from '../components/forms/UserForm'
import Title from '../components/header/Title'

const CreateUser: React.FC = () => {
    return (
        <React.Fragment>
            <Title title="CREATE USER" subtitle="Create a New User Profile" />
            <UserForm />
        </React.Fragment>
    )
}

export default CreateUser