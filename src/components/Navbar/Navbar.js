import style from "./navbar.module.css"
import Img from 'next/image'
import logo from "../../../public/images/phibricateLogo.png"


const Navbar = () => {
    return (
        <div className={style.maindiv}>
            <nav className={style.phibNav}>
                <div className={style.menuLogo}>
                    <Img
                        src={logo}
                        alt="phibricarte"
                        width={60}
                    />
                    <p>Phibricate</p>
                </div>
                <div className={style.menu}>team</div>
                <div className={style.menu}>Portfolio</div>
                <div className={style.menu}>Contact</div>
            </nav>
        </div>
        
    )
}

export default Navbar