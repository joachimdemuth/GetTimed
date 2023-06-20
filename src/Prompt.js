import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';


export default function Prompt(props) {
	const [timerName, setTimerName] = useState('');
	const [seconds, setSeconds] = useState(0);

	const handleNameChange = (e) => {
		setTimerName(e.target.value);
	};

	const handleSecondsChange = (e) => {
		setSeconds(e.target.value);
	};

	return (
		<Overlay>
			<Container>
				<TopContainer>
					<Title>Set new timer</Title>
					<CloseButton onClick={props.closePrompt}>
						<X size={24} />
					</CloseButton>
				</TopContainer>
				<InputContainer>
					<Input
						placeholder='Enter name'
						onChange={(e) => handleNameChange(e)}
					/>
					<Input
						placeholder='Enter seconds'
						onChange={(e) => handleSecondsChange(e)}
						value={seconds}
					/>
				</InputContainer>
				<Button onClick={() => props.onClick(timerName, seconds)}>
					Set timer
				</Button>
			</Container>
		</Overlay>
	);
}

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vh;
	height: 100%;
	background: #00000080;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;

    @media (max-width: 391px) {
        max-width: 390px;
    }

        
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	border-radius: 16px 16px 0 0;
	gap: 16px;
	background-color: #fff;
	color: #000;
	padding: 40px 24px;
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
	animation: move-in 0.3s ease-in-out forwards;

	@keyframes move-in {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
`;
const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const CloseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	border: none;
	height: 48px;
	width: 48px;
	border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;


`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 600;
	margin: 0;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	box-sizing: border-box;
`;

const Input = styled.input`
	font-size: 18px;
	height: 48px;
	font-weight: 400;
	margin: 0;
	padding: 0 16px;
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
`;
