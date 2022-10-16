import React from 'react'
import UsersTable from '../components/tables/UsersTable'
import Title from '../components/header/Title'
const Users: React.FC = () => {
    return (
        <React.Fragment>
            <Title title="TEAM" subtitle="Managing the Team Members" />
            <UsersTable />
        </React.Fragment>
    )
}

export default Users