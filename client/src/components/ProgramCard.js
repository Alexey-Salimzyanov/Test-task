import '../styles/styles.css'; 
import {Image} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'; 
const ProgramCard = ({ bgColor, title, text, textColor}) => {
	return (
	  <div className="d-flex flex-column align-items-center program-card"style={{  background: bgColor, padding: '20px', borderRadius: '10px', margin:'40px'}}>
		<div style={{ width: '160px', height: '160px', borderRadius: '50%', background: '#D9D9D9' }}></div>
		<h2 style={{color: textColor}}>{title}</h2>
		<p style={{ color: textColor}}>{text}</p>

	  </div>
	);
  }
  
  export default ProgramCard;
  