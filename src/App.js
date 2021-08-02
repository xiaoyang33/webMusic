import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import store from "./store";

export default memo(function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<AppHeader />
				{renderRoutes(routes)}
				<AppFooter />
			</HashRouter>
		</Provider>
	);
});
