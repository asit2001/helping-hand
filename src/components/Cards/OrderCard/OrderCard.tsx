function OrderCard() {
  return (
    <div className="order__details">
        <p className="order__details__item"><span className="order__details__sm">Id #: </span>02563</p>
        <p className="order__details__item"><span className="order__details__sm">Requested By: </span> Asit Biswas</p>
        <p className="order__details__item"><span className="order__details__sm">Address: </span> 14808 Michigan Ave</p>
        <p className="order__details__item"><span className="order__details__sm">Date requested: </span> 31.03.2023</p>
        <p className="order__details__item earning">&#8377; 560</p>
        <button className="order__details__item btn">Cancel</button>
    </div>
  )
}

export default OrderCard