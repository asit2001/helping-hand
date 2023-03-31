import { FcMoneyTransfer, FcRating } from "react-icons/fc";
import AccordionOwn from '../Accordion/AcoordionOwn';

export function Providercards(props) {
    const { details, discountedPrice, name, price } = props.obt;
    return (<>
        <div id='cards'>
            <div id="part1">
                <img id="profile" src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=2000" alt=''/>
                <div id="name">
                    <h5 style={{ fontSize: "22px", textTransform:'capitalize' }}>{name}</h5>
                    <p>Service Provider</p>
                </div>
            </div>

            <AccordionOwn title={"View Details"} style={{ margin: "20px" }}>
                <div> <h5>Specification :</h5>
                    <ul style={{ listStyleType: "square", color: "darkviolet" }}>
                        {details.map((e, idx) => <li key={idx}>{e}</li>)}
                    </ul>
                </div>
            </AccordionOwn>

            <div id="part2">
                <h1 style={{ fontSize: "1.6rem" }}>Customer rating</h1>
                <div id="rate">
                    <FcRating className='rz' />
                    <FcRating className='rz' />
                    <FcRating className='rz' />
                    <FcRating className='rz' />
                    <FcRating style={{ fontSize: "25px" }} />
                </div>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px" }}> <FcMoneyTransfer /> <span style={{textDecorationLine: "line-through"}}>{price}</span></p>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px", color: "black", width: "50%", textAlign: "center" }}><FcMoneyTransfer />  <span style={{fontWeight : "600"}}>Discounted</span> - {discountedPrice}</p>
                </div>
            </div>

            <div id='button'>
                <button>Book Now</button>
            </div>
        </div>
    </>)
}