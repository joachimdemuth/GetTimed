import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pause, X, Play } from 'react-feather';


export default function Timer(props) {
	const [seconds, setSeconds] = useState(props.initialSeconds);
    const [isPaused, setIsPaused] = useState(false);


	useEffect(() => {
		if (seconds === 0) return;


            const timerId = setInterval(() => {
			setSeconds((seconds) => seconds - 1);
		}, 1000);

        
		return () => clearInterval(timerId);
	}, [seconds]);


    const pauseTimer = () => {
        setIsPaused(true);

    }

    const resumeTimer = () => {
        setIsPaused(false);
    }

    

	const formattedTime = () => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secondsLeft = seconds % 60;

		return `${hours < 0 ? `${hours}.` : ''}${minutes}.${secondsLeft}`;
	};

	return (
		<TimerContainer>
			<TitleContainer>
				<Title>{props.title}</Title>
				<Display>{formattedTime()}</Display>
			</TitleContainer>

			<ButtonContainer>
                {isPaused ? <PauseButton onClick={resumeTimer}><Play size={24}/></PauseButton> :
				<PauseButton onClick={pauseTimer}>
					<Pause size={24} />
				</PauseButton>}
				<ClearButton onClick={() => props.onClear(props.title)}>
					<X size={24} />
				</ClearButton>
			</ButtonContainer>
		</TimerContainer>
	);
}

const TimerContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	align-items: center;
	
	border-bottom: 1px solid #000;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	gap: 8px;
`;

const Title = styled.h1`
	font-size: 1.2rem;
	font-weight: bold;
	margin: 0;
`;

const Display = styled.h1`
	font-size: 64px;
	font-weight: 400;
	margin: 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	gap: 16px;
`;

const PauseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	color: #fff;
	border: none;
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

const ClearButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	color: #fff;
	border: none;

	border-radius: 24px;
	width: 48px;
	height: 48px;
`;
