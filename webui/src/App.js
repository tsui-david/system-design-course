import { BrowserRouter, Route } from "react-router-dom";

// Data
import lessons from "./generated/data";
import syllabus from "./generated/syllabus.json";

// Components
import Lesson from "./components/Lesson";
import Home from "./components/HomePage";
import SideBarMenu from "./components/SideBarMenu";
import { Layout, Affix } from "antd";

// CSS
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

// Format the lessons into arrays to be passed to react router
function getLessonRoutes() {
  return Object.keys(lessons).map((lesson_id) => {
    return {
      path: `/lessons/${lessons[lesson_id]["topic"]}/${lesson_id}`,
      data: lessons[lesson_id],
      id: lesson_id,
    };
  });
}

function getConceptTitles(lessonTitles) {
  return syllabus["concepts"].map((lesson) => {
    return {
      subMenu: lessonTitles[lesson["topic"]],
      topicTitle: lesson["title"],
    };
  });
}

function getProblemTitles(lessonTitles) {
  return syllabus["problems"].map((lesson) => {
    return {
      subMenu: lessonTitles[lesson["topic"]],
      topicTitle: lesson["title"],
      difficulty: lesson["difficulty"],
    };
  });
}

function getLessonTitles() {
  return Object.keys(lessons).reduce((acc, cur) => {
    const lessonId = lessons[cur]["topic"];

    if (acc.hasOwnProperty(lessonId)) {
      return {
        ...acc,
        [lessonId]: {
          title: [...acc[lessonId]["title"], lessons[cur]["lesson_title"]],
          id: [...acc[lessonId]["id"], cur],
          topic: lessonId,
        },
      };
    } else {
      return {
        ...acc,
        [lessonId]: {
          title: [lessons[cur]["lesson_title"]],
          id: [cur],
          topic: lessonId,
        },
      };
    }
  }, {});
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

  const lessonTitles = getLessonTitles();
  return (
    <BrowserRouter>
      <Layout>
        <Header className="header">
          <div className="logo"></div>
        </Header>

        <Layout style={{backgroundColor: "white"}}>
          <Affix offsetTop={0}>
            <SideBarMenu
              menuConcepts={getConceptTitles(lessonTitles)}
              menuProblems={getProblemTitles(lessonTitles)}
            />
          </Affix>

          <Layout style={{ minHeight: 1200, marginLeft: 0 }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: "#fff",
              }}
            >
              {routeComponents}
              {lessonRouteComponents}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
