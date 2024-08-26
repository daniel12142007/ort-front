import {
	AuthButton,
	Container,
	FormStyled,
	LogInContainer,
	Title,
} from '../../style/style'
import { LoaderDots } from '@/shared/ui'
import { MyInput } from '@/shared/ui/MyInput'
import { MyPasswordInput } from '@/shared/ui/MyPasswordInput'

export const SignIn = () => {
	return (
		<Container>
			<LogInContainer>
				<Title>Вход</Title>
				<FormStyled>
					<MyInput name='email' label='Логин*' type='email' />
					<MyPasswordInput name='password' label='Пароль*' type='password' />
					<AuthButton fullWidth type='submit'>
						{status === 'loading' ? <LoaderDots /> : 'Войти'}
					</AuthButton>
				</FormStyled>
			</LogInContainer>
		</Container>
	)
}
