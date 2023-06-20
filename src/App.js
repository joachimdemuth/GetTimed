import './App.css';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Prompt from './Prompt';

function App() {
const [timers, setTimers] = useState([]);
const [showPrompt, setShowPrompt] = useState(false);




const openPrompt = () => {
  setShowPrompt(true);
  console.log(showPrompt)
}

const handleClosePrompt = () => {
  console.log("clicked")
  setShowPrompt(false);
}

const addTimer = (title, time) => {
  console.log(title, time)
  setTimers([...timers, { id: title, seconds: time }]);
  setShowPrompt(false);
}

const clearTimer = (id) => {
  setTimers(timers.filter((timer) => timer.id !== id));
}

	return (
		<Container>
			<TimerList>
        {timers && timers.map((timer) => (
          <Timer key={timer.id} title={timer.id} initialSeconds={timer.seconds} onClear={(id) => clearTimer(id)} />
        ))}
      </TimerList>
			<ButtonContainer>
				<Button onClick={openPrompt}>Timer</Button>
			</ButtonContainer>
      {showPrompt && <Prompt onClick={(timerName, seconds) => addTimer(timerName, seconds)} closePrompt={handleClosePrompt} />}
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	justify-content: center;
box-sizing: border-box;
  width: 100%;
	flex-direction: column;
	flex: 1;
	height: 100vh;

	color: #000;
	padding: 24px 24px;

	@media (max-width: 390px) {
		background-color: #decade;
	}
`;

const TimerList = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;


`;

const Button = styled.button`
	background-color: #000;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;
	transition: all 0.3s ease-in-out;
	height: 64px;
	width: 100%;

`;




