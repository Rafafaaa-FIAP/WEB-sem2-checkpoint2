
import "./styles.scss"
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiGuitarBassHead } from "react-icons/gi";
import { GiDrumKit } from "react-icons/gi";
import { BiSolidPiano } from "react-icons/bi";
import { TbGuitarPick } from "react-icons/tb";











const InstrumentsBar  = () =>{
    
    return(
        <>
        
           <ul className="bar">

            <li>
                <AiOutlineSound className="icon"></AiOutlineSound>
                <span>Áudio</span>
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

            </li>

           <li>
                <GiGuitarBassHead className="icon"></GiGuitarBassHead>
                <span>Cordas</span>
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

            </li>

            <li>
                <GiDrumKit className="icon"></GiDrumKit>
                <span>Bateria</span>
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

            </li>
            <li>
                <BiSolidPiano className="icon"></BiSolidPiano>
                <span>Teclas</span>
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

            </li>
            <li>
                <TbGuitarPick className="icon"></TbGuitarPick>
                <span>Usados</span>
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

            </li>

            
            
           
           </ul>

        </>
    )
}


export default InstrumentsBar