import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './router/router'

export const App = () => {
	return (
		<BrowserRouter>
			<MyRoutes />
		</BrowserRouter>
	)
}
