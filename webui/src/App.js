import { BrowserRouter, Route } from "react-router-dom";

// Data
import lessons from "./generated/data";
import syllabus from "./generated/syllabus.json";

// Components
import Lesson from "./components/Lesson";
import Home from "./components/HomePage";
import SideBarMenu from "./components/SideBarMenu";
import Head from "./components/Head";
import { Layout, Affix } from "antd";

// CSS
import "./App.css";
import "antd/dist/antd.css";

const { Content, Footer } = Layout;

// Format the lessons into arrays to be passed to react router
function getLessonRoutes(lessonMap) {
  return Object.keys(lessons).map((lesson_id) => {
    return {
      path: `/lessons/${lessons[lesson_id]["topic"]}/${lesson_id}`,
      data: lessons[lesson_id],
      id: lesson_id,
      previousTopic: lessonMap.get(lesson_id)["previousTopic"],
      previousID: lessonMap.get(lesson_id)["previousID"],
      nextTopic: lessonMap.get(lesson_id)["nextTopic"],
      nextID: lessonMap.get(lesson_id)["nextID"],
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

// Get a map of key: lesson id and value: (previous lesson, and next lesson)
function getPreviousNextLessonMap(lessonTitles) {
  const combinedSyllabus = getConceptTitles(lessonTitles).concat(
    getProblemTitles(lessonTitles)
  );
  let currentTopic;
  let previousID;
  let previousTopic;

  const m = new Map();

  for (const lessonGroup of combinedSyllabus) {
    const lessonDetails = lessonGroup["subMenu"];
    currentTopic = lessonDetails["topic"];

    for (const currentID of lessonDetails["id"]) {
      if (previousID != null) {
        m.set(previousID, {
          ...m.get(previousID),
          nextID: currentID,
          nextTopic: currentTopic,
        });
      }
      m.set(currentID, {
        previousID: previousID,
        previousTopic: previousTopic,
      });
      previousID = currentID;
      previousTopic = currentTopic;
    }
  }

  return m;
}

function App() {
  let routes = [
    {
      path: "/",
      component: Home,
    },
  ];
  const lessonTitles = getLessonTitles();
  const lessonMap = getPreviousNextLessonMap(lessonTitles);
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  const lessonRouteComponents = getLessonRoutes(lessonMap).map(
    ({ path, data, id, previousTopic, previousID, nextTopic, nextID }, key) => {
      return (
        <Route
          exact
          path={path}
          key={key}
          render={() => (
            <Lesson
              lessonID={id}
              lessonData={data}
              previousTopic={previousTopic}
              previousID={previousID}
              nextTopic={nextTopic}
              nextID={nextID}
            />
          )}
        />
      );
    }
  );

  return (
    <BrowserRouter>
      <Layout style={{minHeight: "100vh", overflow: "auto"}}>
        <Head />
        <Layout style={{ backgroundColor: "white" }}>
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
            <Footer style={{ textAlign: 'center', "padding-bottom": "0px" }}>Pol Design ©2020 Created by Pol</Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
