import { Outlet } from 'react-router-dom'
import { SignIn } from './ui'

export const AuthRouter = {
	path: '',
	element: <Outlet />,
	children: [
		{
			path: 'auth/sign-in',
			element: <SignIn />,
		},
	],
}
