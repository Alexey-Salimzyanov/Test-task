import '../styles/styles.css'; 
import {Image} from "react-bootstrap"
const AFCard = ({ number, title, text, image}) => {
	return (
	  	  <div  style={{backgroundColor: '#F66F16', borderRadius: '47px', margin:'25px'}} className="ACFcard">
			<div style={{flexWrap:'wrap', display:'flex', flexDirection:'row-reverse', alignItems:'center', justifyContent:'center'}}>
				<Image src={image}  style={{objectFit:'contain'}}/> 
				<div className='d-flex align-items-center justify-content-between' style={{flexGrow: 1}}>
					<p className='number'>{number}</p>
					<h2 style={{ margin: '20px 0px 10px 15px', fontSize:'20px', color: 'white',fontWeight:'400'}}>{title}</h2>
					<p></p>
				</div>  
			</div>
			<p style={{  fontSize:'20px', color: 'white',fontWeight:'400'}}>{text}</p>
		  </div>
	);
  }
  
  export default AFCard;
  