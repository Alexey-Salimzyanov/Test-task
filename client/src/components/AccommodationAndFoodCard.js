import '../styles/styles.css'; 
import {Image} from "react-bootstrap"
const AFCard = ({ number, title, text, image}) => {
	return (
	  	  <div style={{ width: '636px', height: '497px', backgroundColor: '#F66F16',padding: '20px 76px', borderRadius: '47px', margin:'40px'}}>
			<div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
				<p style={{  fontSize:'96px', color: 'white',fontWeight:'400'}}>{number}</p>	
				<h2 style={{ margin: '20px 0 10px 0', fontSize:'20px', color: 'white',fontWeight:'400',textAlign: 'center' }}>{title}</h2>
				<Image src={image} style={{objectFit:'contain'}}/> 
			</div>
			<p style={{  fontSize:'20px', color: 'white',fontWeight:'400'}}>{text}</p>
		  </div>
	);
  }
  
  export default AFCard;
  