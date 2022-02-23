import React from "react";
import { renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../Routes";
import {Provider} from "react-redux";


export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes/>
            </StaticRouter>
        </Provider>

    );

    return `
    <!Doctype html>
    <html lang="fr">
        <head>
            <title>Dehef Blog</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
`
}