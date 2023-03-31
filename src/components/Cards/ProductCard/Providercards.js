import { FcMoneyTransfer, FcRating } from "react-icons/fc";
import AccordionOwn from '../Accordion/AcoordionOwn';
import { AiFillStar } from "react-icons/ai";

export function Providercards(props) {
    const { details, discountedPrice, name, price } = props.obt;
    return (<>
        <div id='cards'>
            <div id="part1">
                <img id="profile" src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=2000" alt='' />
                <div id="name">
                    <h5 style={{ fontSize: "22px", textTransform: 'capitalize' }}>{name}</h5>
                    <p>Service Provider</p>
                </div>
            </div>

            <AccordionOwn title={"View Details"}>
                <h3 style={{marginLeft: "25px", padding: "5px"}}>Specification :</h3>
                <ul style={{ color: "darkviolet", marginLeft: "40px", marginBottom: "10px" }}>
                    {details.map((e, idx) => <li style={{padding: "5px"}} key={idx}>{e}</li>)}
                </ul>
            </AccordionOwn>

            <div id="part2">
                <h1 style={{ fontSize: "1.6rem" }}>Customer Rating</h1>
                <div id="rate">
                    <AiFillStar className='rz' />
                    <AiFillStar className='rz' />
                    <AiFillStar className='rz' />
                    <AiFillStar className='rz' />
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px" }}> <FcMoneyTransfer /> <span style={{ textDecorationLine: "line-through" }}>{price}</span></p>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px", color: "black", width: "50%", textAlign: "center" }}><FcMoneyTransfer />  <span style={{ fontWeight: "600" }}>Discounted</span> - {discountedPrice}</p>
                </div>
            </div>

            <div id='button'>
                <button>Book Now</button>
            </div>
        </div>
    </>)
}