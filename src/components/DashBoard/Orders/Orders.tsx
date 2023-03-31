import OrderCard from '../../Cards/OrderCard/OrderCard';
import './Styles/Orders.css';
function Orders() {
  return (
    <>
        <h2 className="dashboard__container__right__tabTitle">Order</h2>
        <p className="dashboard__container__right__subtitle">48 orders found</p>
        <div className="orders">
            <div className="order__title">
                <p className="order__title__item">ID</p>
                <p className="order__title__item">Name</p>
                <p className="order__title__item">Address</p>
                <p className="order__title__item">Date</p>
                <p className="order__title__item">Earning</p>
                <p className="order__title__item">Reject</p>
            </div>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>
        <div className="pagination">
            <button className="pagination__box">1</button>
            <button className="pagination__box">2</button>
            <button className="pagination__box">3</button>
            <button className="pagination__box">...</button>
            <button className="pagination__box">5</button>
        </div>
    </>
  )
}

export default Orders