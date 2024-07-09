import React, { useContext, useState} from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import '../styles/styles.css'; 
import ProgramCard from "../components/ProgramCard";
import MyButton from "../components/Button";
import loupe from "../images/Loupe.png"
import house from "../images/house.png"
import plate from "../images/plate.png"
import car from "../images/car.png"
import picture from "../images/picture.png"
import logo2 from "../images/logo_sibsutis_2.png"
import sun from "../images/sun.png"
import AFCard from "../components/AccommodationAndFoodCard";
import { Link } from "react-router-dom";
import {  sendQuestion } from "../http/hosts";
import NavBar from "../components/NavBar";

const MainPage =  () =>{

	const [email,setEmail]=useState("");
	const [question,setQuestion]=useState("");
	const handleEmailChange = (e)=>{
	  setEmail(e.target.value)
	}
	const handleQuestionChange = (e)=>{
		setQuestion(e.target.value)
	}
	const handleClick = (event)=>{
		console.log(email);
		console.log(question);
		sendQuestion(email, question);
	}
    return (
		<>
		<header>
			<NavBar/>
		</header>

		<main>
			<div style={{marginTop:'150px',fontFamily: 'Dela Gothic One'}} >
			<div id="about"  style={{scrollMarginTop:'150px'}} class="container-fluid">
			<div>
				<div class="d-flex justify-content-center">
					<div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundImage: `url(${sun})`, backgroundPosition: 'left', backgroundRepeat: 'no-repeat'}}>
						<label className="head-text">ЛЕТНЯЯ ШКОЛА СибГУТИ-2024</label>			
						<MyButton text="зарегистрироваться"/>
					</div>
					<Image src={picture} alt="picture" /> 		
				</div>
			</div>
				<Container className="mt-5 d-flex flex-row about_info container-fluid">
					<div>25-28 ИЮНЯ<span>даты проведения</span></div>
					<div>5 ДНЕЙ<span>длительность смены</span></div>
					<div>15-18 ЛЕТ<span>возраст участников</span></div>
				</Container>
			</div>

			<div id="training" style={{scrollMarginTop:'100px'}} class="container-fluid">
				<div className="training-list">
					<label className="list_header">ДЛЯ КОГО</label>
					<div className="rectangle"></div>
					<ul>
						<li>Выпускники 9 и 10 классов средних школ</li>
						<li>Те кто, интересуются точными науками, инженерией, информационными и телекоммуникационными технологиями.</li>
					</ul>
				</div>
				<div  className="training-list">
					<label className="list_header">Зачем</label>
					<div className="rectangle" ></div>
					<ul>
						<li>Познакомиться с университетом, преподавателями и студентами</li>
						<li>Разработать первый технологичный прототип</li>
						<li>Узнать о передовых достижениях в области связи</li>
						<li>Вдохновиться на будущую карьеру в области науки и современных технологий</li>
						<li>Провести каникулы весело, интересно и полезно</li>
					</ul>
				</div>
			</div>

			<div style={{marginTop:'100px',scrollMarginTop:'100px'}} id="program" className="d-flex flex-column align-items-center">
			<p style={{textAlign:'center', fontSize: '48px', fontWeight: 400, color:'#4D00F0'}}>ПРОГРАММА</p>
			<div  className="program-content">		
				<ProgramCard 
				bgColor="linear-gradient(#6B2CC5, #4D00F0)" 
				title="Экспертное мнение" 
				text="Преподаватели и разработчики из лидирующих компаний  просто и увлекательно рассказывают о новейших технологиях, программировании и работе с данными"
				textColor="white"
				/>
				<ProgramCard 
				bgColor="linear-gradient(#F66F16, #E01936)" 
				title="Практикумы и мастер-классы" 
				text="Создание радиоприемников и передатчиков, разработка нейронных сетей, пилотирование БПЛА"
				textColor="black"
				/>
				<ProgramCard 
				bgColor="linear-gradient(#F66F16, #E01936)" 
				title="Культурная программа" 
				text="Экскурсии в музеи, неформальное общение со студентами и преподавателями"
				textColor="black"
				/>
				<ProgramCard 
				bgColor="linear-gradient(#6B2CC5, #4D00F0)" 
				title="Интеллектуальные состязания" 
				text="Квесты, квизы и конкурсы – применение знаний, командные соревнования и новый опыт"
				textColor="white"
				/>
			
			</div>
				<MyButton text="СМОТРЕТЬ ЛЕТО В ТЕЛЕКОМЕ"/>
			</div>

			<Container className="mt-5">
				<p className="header">Дополнительные баллы при поступлении в СибГУТИ</p>
				<div style={{color:'black'}} class="d-flex">
				<Image src={loupe} alt="Loupe" style={{objectFit:'contain',marginRight:'20px'}}/> 
				<ul>
					<li style={{marginBottom: '20px', fontSize: '32px'}}>Участники посещают все мероприятия школы и получают баллы (очки) за работу. Набрав по итогам  Летней школы наибольшее число баллов, можно получить дипломы I, II и III степени.</li>
					<li style={{marginBottom: '20px', fontSize: '32px'}}>Дипломы I, II и III места могут быть учтены в качестве индивидуальных достижений при поступлении на направления подготовки СибГУТИ.</li>
				</ul>
				</div>
			</Container>

			<div id="AccomodationAndFood" className="d-flex align-items-center justify-content-center" style={{scrollMarginTop:'100px'}}>
			<div>
				<AFCard
				number="1"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sapien, imperdiet id malesuada eu, lacinia non augue. Vivamus id metus id risus scelerisque consectetur. Duis at rhoncus sapien, nec convallis mi. Mauris efficitur aliquam ipsum et sodales. Phasellus sit."
				title="ПРОЖИВАНИЕ"
				image={house}
				/>
			</div>
			<div>
				<AFCard
				number="2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sapien, imperdiet id malesuada eu, lacinia non augue. Vivamus id metus id risus scelerisque consectetur. Duis at rhoncus sapien, nec convallis mi. Mauris efficitur aliquam ipsum et sodales. Phasellus sit."
				title="ПИТАНИЕ"
				image={plate}
				/>
			</div>
			<div>
				<AFCard
				number="3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sapien, imperdiet id malesuada eu, lacinia non augue. Vivamus id metus id risus scelerisque consectetur. Duis at rhoncus sapien, nec convallis mi. Mauris efficitur aliquam ipsum et sodales. Phasellus sit."
				title="ПРОЕЗД"
				image={car}
				/>
			</div>
			</div>

			<Container id="HowToEnroll" style={{scrollMarginTop:'100px'}}>
				<p className="header">Как участвовать?</p>
				<p style={{color:'black', fontSize:'32px'}}>
				Участником Летней школы СибГУТИ может стать выпускник 9 или 10 класса средней школы.
				<br/><br/>
				Необходимо подать заявку на участие, заполнив анкету 
				<br/><br/>
				После подачи заявки оргкомитет Летней школы свяжется с Вами и вышлет на электронную почту платежные реквизиты.
				<br/><br/>				
				В случае большого числа заявок возможен конкурсный отбор. Отбор проводится на основании ответов в регистрационной форме с учетом оценки личных достижений и изложенной мотивации к участию.
				</p>
				<Link className="link">Положение о Летней школе СибГУТИ «Лето в телекоме»</Link>
				<br/>
				<Link className="link">Информационное письмо</Link>
				<p className="header">Задать вопрос</p>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<div >
						<p className="input-header">EMAIL</p>
						<input type="text" value={email} onChange={(event)=>handleEmailChange(event)} style={{height:'42px'}}></input>
					</div>
					<div style={{marginTop:'20px'}}>
						<p className="input-header">ВОПРОС</p>
						<textarea value={question} onChange={(event)=>handleQuestionChange(event)} style={{height:'139px',resize:'vetical', overflow: 'auto'}}></textarea>
					</div>
					<MyButton text="ЗАДАТЬ ВОПРОС" handler={handleClick}/>
				</div>


			</Container>
			<p className="header" id="cost" style={{scrollMarginTop:'100px'}}>СТОИМОСТЬ</p>
			<div class="d-flex justify-content-center" style={{textAlign:'center'}}>	
				<div style={{width:'358px', margin:'10px 60px'}}>
					<p className="header">8000 РУБ.</p>
					<p className="common-text">При ранней регистрации с 01.04.2024 по 31.05.2024</p>
				</div>
				<div style={{width:'358px', margin:'10px 60px'}}>
					<p className="header">10000 РУБ.</p>
					<p className="common-text">При поздней регистрации с 01.06.2024 по 20.06.2024</p>
				</div>
			</div>
			<Container className="common-text" style={{marginTop:'50px'}}>В течение 10 рабочих дней после получения официального приглашения и подписания договора участия в ЛШ, участниками ЛШ (родителями или законными представителями) производится оплата организационного взноса. В случае отсутствия оплаты в обозначенный срок, право получить приглашение в ЛШ переходит к участнику, следующему по рейтингу.</Container>
			</div>
		</main>

		<footer>
			<div id="contacts" class="container-fluid" style={{scrollMarginTop:'100px'}}>
				<Image src={logo2} /> 
				<div>
					<Link style={{color:'white'}}>КОНТАКТЫ</Link>
					<br/>
					<Link style={{color:'white'}}>САЙТ УНИВЕРСИТЕТА</Link>
				</div>	
			</div>
		</footer>
		</>
    );

}
export default MainPage;
