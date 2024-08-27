import { AuthRouter } from '@/features/Auth'
import { Layout } from '@/widgets'
import { MainDashboard } from '@/widgets/MainDashboard/MainDashboard'
import { useRoutes } from 'react-router'

export const MyRoutes = () => {
	return useRoutes([
		{
			path: '',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <MainDashboard/>
				}
			],
		},
		AuthRouter,
	])
}
