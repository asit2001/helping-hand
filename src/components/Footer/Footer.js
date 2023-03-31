import {BiPaperPlane} from 'react-icons/bi'
import React from 'react'
// import Footer1 from '../svg/footer/Footer1'
import SubFooter from './SubFooter'
import whitedottexture from '../../images/grunge_detailed_dusty_overlay_texture_2804.jpg'
import Logo from '../svg/Logo'
import '../../pages/HomeStyles/style/footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <img className='footerwhitedottexture' src={whitedottexture} alt=''/>
        <div className='footer_wrap'>
            <div className='col-1'>
                <div className='col-1_logo'>
                    <Logo />
                </div>
                <div className='col-1_subtitle'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>
            <div className='col-2'>
                <div className='footer_head'>Contact Info</div>
                <ul>
                    <li>41/1, Hilton Mall, NY City New York</li>
                    <li>+012-78901234</li>
                    <li>help@mail.com</li>
                </ul>
            </div>
            <div className='col-3'>
                <div className='footer_head'>Recent News</div>
            </div>
            <div className='col-4'>
                <div className='footer_head'>Subscribe Newsletter</div>
                <div>Get the latest creative news from Qixer template</div>
                <form>
                    <input placeholder='Enter Email Address'/>
                    <button><BiPaperPlane /> </button>
                </form>
            </div>
        </div>
    </div>
    <SubFooter />
    </>
  )
}

export default Footer