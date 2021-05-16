import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css"
const pages = import.meta.globEager('./pages/*.tsx')

const routes: any[] = Object.keys(pages).filter(path => !!path).map((path: string) => {
  const matches = path.match(/\.\/pages\/(.*)\.tsx$/)
  if (!matches?.length) {
    return null
  }
  const name = matches[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
}).filter(c => !!c)

export default function App() {
  return (
    <Switch>
      {routes.map(({ path, component: RouteComp }) => {
        return (
          <Route key={path} path={path}>
            <RouteComp />
          </Route>
        )
      })}
    </Switch>
  );
}
