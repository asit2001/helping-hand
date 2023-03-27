function OrderCard() {
  return (
    <div className="order__details">
        <p className="order__details__item">02563</p>
        <p className="order__details__item">Asit Biswas</p>
        <p className="order__details__item">14808 Michigan Ave</p>
        <p className="order__details__item">31.03.2023</p>
        <p className="order__details__item pending">completed</p>
        <button className="order__details__item btn">Cancel</button>
    </div>
  )
}

export default OrderCard