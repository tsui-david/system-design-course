import "./App.css";
import lessons from "./generated/data";

import Lesson from "./components/Lesson";
import Home from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

// Format the lessons into arrays to be passed to react router
function getLessonRoutes() {
  return Object.keys(lessons).map((lesson_id) => {
    return {
      path: `/lessons/${lesson_id}`,
      data: lessons[lesson_id],
      id: lesson_id,
    };
  });
}

function App() {
  let routes = [
    {
      path: "/",
      component: Home,
    },
  ];

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  const lessonRouteComponents = getLessonRoutes().map(
    ({ path, data, id }, key) => {
      return (
        <Route
          exact
          path={path}
          key={key}
          render={() => <Lesson lessonID={id} lessonData={data} />}
        />
      );
    }
  );

  return (
    <BrowserRouter>
      {routeComponents}
      {lessonRouteComponents}
    </BrowserRouter>
  );
}

export default App;
