import { FcMoneyTransfer, FcRating } from "react-icons/fc";
import AccordionOwn from '../Accordion/AcoordionOwn';
import { AiFillStar } from "react-icons/ai";

export function Providercards(props) {
    const { details, discountedPrice, name, price, imgUrl } = props.obt;
    return (<>
        <div id='cards'>
            <div id="part1">
                <img id="profile" src={props.pics[props.idx]} alt='' />
                <div id="name">
                    <h5 style={{ fontSize: "30px", textTransform: 'capitalize' }}>{name}</h5>
                    <p>Service Provider</p>
                </div>
            </div>

            <AccordionOwn title={"View Details"}>
                <h3 style={{ marginLeft: "25px", padding: "5px" }}>Specification :</h3>
                <ul style={{ color: "darkviolet", marginLeft: "40px", marginBottom: "10px" }}>
                    {details.map((e, idx) => <li style={{ padding: "5px" }} key={idx}>{e}</li>)}
                </ul>
            </AccordionOwn>

            <div id="part2">
                <h1 style={{ fontSize: "1.6rem" }}>Customer Rating</h1>
                <div id="rate" >
                    <AiFillStar className='rz' />
                    <AiFillStar className='rz' />

                    <AiFillStar className='rz' />
                    <AiFillStar className='rz' />
                    <p style={{ fontSize: "20px", color: "red", margin: "10px 0px 20px 0px" }}>Overall Reviews: 2K</p>
                </div>
                <div className="midimg23"><img className="part2img2" src={imgUrl === "" ? "https://1.cms.s81c.com/sites/default/files/2021-06-23/Financial_Services.png" : imgUrl} /></div>
                <div style={{ display: "flex", justifyContent: "left", flexDirection: "column", alignItems: "left" }}>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px", alignItems: "center", display: "flex" }}> <FcMoneyTransfer style={{ fontSize: "30px", marginRight: "10px" }} /><span style={{ fontWeight: "600" }}>Starts At : </span> <span style={{ textDecorationLine: "line-through", marginLeft: "10px" }}> &#8377;{price}</span></p>
                    <p style={{ margin: "15px 0 0 0", fontSize: "20px", alignItems: "center", display: "flex" }}> <FcMoneyTransfer style={{ fontSize: "30px", marginRight: "10px" }} /><span style={{ fontWeight: "600" }}>Discounted : </span> <span style={{ marginLeft: "10px" }}>&#8377;{discountedPrice}</span></p>
                </div>
            </div>

            <div id='button'>
                <button>Book Now</button>
            </div>
        </div>
    </>)
}