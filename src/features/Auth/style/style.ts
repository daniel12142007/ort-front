import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const Container = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: 1024px) {
		height: 608px;
		align-items: center;
	}
`
export const LogInContainer = styled.div`
	width: 500px;
	padding: 0 47px 47px 47px;
	background-color: #ffff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 4px 8px 0px #00000040;
`
export const Title = styled.h1`
	color: #333350;
	text-align: center;
	font-size: 32px;
	font-weight: 600;
	color: #000000;
	margin: 30px 0;
`
export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const AuthButton = styled(Button)`
	background-color: ${({ disabled }) => (disabled ? '#858fb1' : '#3E5ECF')};
	border: 1px solid ${({ disabled }) => (disabled ? '#858fb1' : '#3E5ECF')};
	border-radius: 10px;
	color: #ffff;
	margin-top: 30px;
	padding: 12px;
	font-size: 16px;
	font-weight: 600;

	:hover {
		background-color: #5870c6;
		border: 1px solid #5870c6;
	}
`
export const FormInput = styled.input`
	border-radius: 8px;
	border: 1px solid #000000;
	outline: none;
	padding: 11px 15px;
	width: 100%;
	margin-top: 10px;
	font-size: 16px;
	font-weight: 500;
`

export const Label = styled.label`
	font-size: 16px;
	color: #00000080;
`
