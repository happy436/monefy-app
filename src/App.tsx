import { Route, Routes } from "react-router";
import DashboardPageLayout from "./app/layouts/DashboardPageLayout";
import MainPage from "./app/pages/HomePage/HomePage";
import LoginPage from "./app/pages/Login/LoginPage";
import NoSidebarLayout from "./app/layouts/NoSidebarLayout";

function App() {

	return (
		<>
			<Routes>
				<Route element={<NoSidebarLayout />}>
					<Route path="/login" element={<LoginPage />} />
				</Route>
				<Route element={<DashboardPageLayout />}>
                    <Route path={"/"} element={<MainPage/>} />
                </Route>
			</Routes>
		</>
	);
}

export default App;
