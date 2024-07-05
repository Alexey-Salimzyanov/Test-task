
import { Button } from 'react-bootstrap';
import '../styles/styles.css'; 
const MyButton = ({text, handler}) => {
	return (
		<button className="my-button" onClick={handler}>{text}</button>
	);
  }
  
  export default MyButton;
  