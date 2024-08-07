import React from 'react'
import AdminLayout from './AdminLayout'
import { useDeleteReviewMutation, useLazyGetReviewsAdminQuery } from '../../redux/api/product';
import toast from 'react-hot-toast';
import { MDBDataTable } from 'mdbreact';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';

const ProductReviews = () => {
    const [productId, setProductId] = React.useState("");

    const [getReviews, { isLoading: getReviewsLoading, error: getReviewsError, data }] = useLazyGetReviewsAdminQuery();
    const [deleteReview, { isLoading: deleteReviewLoading, error: deleteReviewError, isSuccess: deleteReviewSuccess, data: deleteReviewData }] = useDeleteReviewMutation();

    const setReviews = () => {
        const reviews = {
            columns: [
                {
                    label: "Review Id",
                    field: "id",
                    sort: "asc",
                },
                {
                    label: "Rating",
                    field: "rating",
                    sort: "asc",
                },
                {
                    label: "Comment",
                    field: "comment",
                    sort: "asc",
                },
                {
                    label: "User",
                    field: "user",
                    sort: "asc",
                },
                {
                    label: "Actions",
                    field: "actions",
                    sort: "asc",
                },
            ],
            rows: []
        }

        data?.reviews?.forEach((review) => {
            reviews.rows.push({
                id: review._id,
                rating: review.rating,
                comment: review.comment,
                user: review.user?.name,
                actions: (
                    <button className='btn btn-outline-danger ms-2'
                        onClick={() => deleteReview({ id: review?._id, productId })}
                        disabled={deleteReviewLoading}
                    >
                        <i className='fa fa-trash'></i>
                    </button>
                )
            });
        })
        return reviews
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(productId)
        getReviews(productId);
    }

    React.useEffect(() => {
        if (getReviewsError) toast.error(getReviewsError?.data?.message || "Something went wrong")
        if (deleteReviewError) toast.error(deleteReviewError?.data?.message || "Something went wrong")

        if (deleteReviewSuccess) toast.success(deleteReviewData?.message || "Review deleted successfully");
    }, [getReviewsError, deleteReviewError, deleteReviewSuccess])

    return (
        <AdminLayout>
            <MetaData title={"Reviews | Admin"} />
            <div className="row justify-content-center my-5">
                <div className="col-6">
                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="productId_field" className="form-label">
                                Enter Product ID
                            </label>
                            <input
                                type="text"
                                id="productId_field"
                                className="form-control"
                                value={productId}
                                onChange={e => setProductId(e.target.value)}
                            />
                        </div>

                        <button
                            id="search_button"
                            type="submit"
                            className="btn btn-primary w-100 py-2"
                        >
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>

            {getReviewsLoading ? <Loader /> : <MDBDataTable data={setReviews()} className='px-3' bordered striped hover />}
        </AdminLayout>
    )
}

export default ProductReviews