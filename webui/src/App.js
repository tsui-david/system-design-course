import { BrowserRouter, Route } from "react-router-dom";

// Data
import lessons from "./generated/data";

// Components
import Lesson from "./components/Lesson";
import Home from "./components/HomePage";
import SideBarMenu from "./components/SideBarMenu";
import { Layout } from 'antd';

// CSS
import "./App.css";
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;


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

function getLessonTitles() {

  return Object.keys(lessons).reduce((acc, cur) => {

    const lessonId = lessons[cur]["topic"];

    if(acc.hasOwnProperty(lessonId)) {
      return {
        ...acc,
        [lessonId]: {
          title: [...acc[lessonId]["title"], lessons[cur]["lesson_title"]],
          id: [...acc[lessonId]["id"], cur]
        }
      };
    }
    else {
      console.log('curr: ', cur);
      return {
        ...acc,
        [lessonId]: {
          title: [lessons[cur]["lesson_title"]],
          id: [cur]
        }
      }
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

  return (
    <BrowserRouter>
      <Layout style={{minHeight: "100vh", overflow: "auto"}}>
        <Header className="header">
          <div className="logo"  ></div>
        </Header>
        <Layout>
          <SideBarMenu menuData={getLessonTitles()} />
          <Layout style={{ padding: '24px 24px 24px' }}>
            <Content
            style={{
              padding: "24px",
              margin: 0,
              minHeight: 280,
              background: "#fff",
            }}>
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
