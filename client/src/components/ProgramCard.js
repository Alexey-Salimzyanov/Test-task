import '../styles/styles.css'; 
import {Image} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'; 
const ProgramCard = ({ bgColor, title, text, textColor}) => {
	return (
	  <div style={{ width: '650px', height: '456px', background: bgColor, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', margin:'40px'}}>
		<div style={{ width: '160px', height: '160px', borderRadius: '50%', background: '#D9D9D9' }}></div>
		<h2 style={{ margin: '20px 0 10px 0', fontSize:'40px', color: textColor,fontWeight:'400',textAlign: 'center' }}>{title}</h2>
		<p style={{ fontSize:'24px', color: textColor, fontWeight:'400', textAlign: 'center', lineHeight: '1.3' }}>{text}</p>

	  </div>
	);
  }
  
  export default ProgramCard;
  