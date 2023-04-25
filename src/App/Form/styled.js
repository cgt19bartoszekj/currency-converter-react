import styled from "styled-components";

export const Wrapper = styled.form`
	max-width: 1000px;
	margin: auto;
`;

export const Fieldset = styled.fieldset`
	padding: 0px 40px 0 40px;
	border: 1px solid
		${({ theme }) => theme.colors.brightGrey};
	border-radius: 50px;
	background-color: #00000090;
	box-shadow: #000000 0 0 20px;
`;

export const Legend = styled.legend`
	text-align: center;
`;

export const Input = styled.input`
	width: 50%;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	outline: 1px solid
		${({ theme }) => theme.colors.brightGrey};
	border-radius: 10px;
	padding: 0 10px;
	background: #00000090;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.blue};
	}

	&:active {
		outline: 2px solid
			${({ theme }) => theme.colors.brightBlue};
	}
`;

export const Output = styled.div`
	margin-top: 20px;
`;

export const Select = styled.select`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.grey};
	border: none;
	background: none;
	padding: 0;
`;

export const Button = styled.button`
	cursor: pointer;
	width: 100%;
	border-radius: 50px;
	background: #00000090;
	color: ${({ theme }) => theme.colors.white};
	border: 1px solid
		${({ theme }) => theme.colors.brightGrey};
	transition: 0.3s;
	margin-top: 10px;

	&:hover {
		background-color: #00000050;
		text-shadow: #ffffff50 0 0 10px;
		box-shadow: #ffffff50 0 0 10px;
	}

	&:active {
		background-color: #00000030;
		text-shadow: #ffffff 0 0 10px;
	}
`;

export const Information = styled.div`
	font-size: 17px;
	font-style: italic;
	text-align: center;
	color: ${({ theme }) => theme.colors.grey};
	margin: 0;
`;

export const Fail = styled.div`
	text-align: center;
	margin-bottom: 40px;
	color: ${({ theme }) => theme.colors.red};
`;

export const Loading = styled.div`
	text-align: center;
	margin-bottom: 40px;
`;

export const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;
