import { HashRouter, Routes, Route } from 'react-router-dom';
import { StartPage } from '../pages/StartPage';
import { GamePage } from '../pages/GamePage';
import { GAME_PAGE_ROUTE, START_PAGE_ROUTE } from '../shared/constants';
import "./index.css";

export function AppRouter() {
	return (
		<HashRouter>
			<Routes>
				<Route path={START_PAGE_ROUTE} element={<StartPage />} />
				<Route path={GAME_PAGE_ROUTE} element={<GamePage />} />
			</Routes>
		</HashRouter>
	);
}
