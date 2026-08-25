import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home.jsx";
import NotFound from "./Screens/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import Main from "./components/Main.jsx";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' exact={true} element={<Main />} />

				<Route path='*' element={<NotFound />} />
			</Routes>

			<ToastContainer />
		</div>
	);
}

export default App;
