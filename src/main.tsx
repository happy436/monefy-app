import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/createStore.ts";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
