import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from '../auth/ProtectedRoute'
import Dashboard from '../admin/Dashboard'
import AdminProducts from '../admin/AdminProducts'
import NewProduct from '../admin/NewProduct'
import UpdateProduct from '../admin/UpdateProduct'
import UploadImages from '../admin/UploadImages'
import AdminOrders from '../admin/AdminOrders'
import ProcessOrder from '../admin/ProcessOrder'
import AdminUsers from '../admin/AdminUsers'
import UpdateUser from '../admin/UpdateUser'
import ProductReviews from '../admin/ProductReviews'

const Admin = () => {
    return (
        <>
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute admin>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products"
                element={
                    <ProtectedRoute admin>
                        <AdminProducts />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/product/new"
                element={
                    <ProtectedRoute admin>
                        <NewProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products/:id"
                element={
                    <ProtectedRoute admin>
                        <UpdateProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products/:id/upload_images"
                element={
                    <ProtectedRoute admin>
                        <UploadImages />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/orders"
                element={
                    <ProtectedRoute admin>
                        <AdminOrders />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/orders/:id"
                element={
                    <ProtectedRoute admin>
                        <ProcessOrder />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/users/"
                element={
                    <ProtectedRoute admin>
                        <AdminUsers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/users/:id"
                element={
                    <ProtectedRoute admin>
                        <UpdateUser />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/reviews/"
                element={
                    <ProtectedRoute admin>
                        <ProductReviews />
                    </ProtectedRoute>
                }
            />
        </>
    )
}

export default Admin