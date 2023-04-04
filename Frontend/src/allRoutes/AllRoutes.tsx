import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowAllUser from '../pages/ShowAllUser'
import Form from '../pages/Form'

const AllRoutes: FC = () => {
    return (
        <Routes>
            {/* Home Route */}
            <Route path='/' element={<Form />}></Route>
            {/* display all user route */}
            <Route path='/all-users' element={<ShowAllUser />}></Route>
        </Routes>
    )
}

export default AllRoutes