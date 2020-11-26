import React from "react";

// Components
import { Menu, Layout, Tag } from "antd";

// Routing
import { useHistory, withRouter } from "react-router-dom";


//CSS
import "antd/dist/antd.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: ["1"],
      selectedSubMenus: ["1"],
    }
  }

  componentWillMount(){
    this.props.history.listen((event)=>{
        const pathname = event.pathname.split("/");
        if(pathname != null){
          this.setState({ 
            selectedSubMenus: [pathname[2]],
            selectedItems: [pathname[3]]
          });
        }
    });
  }

  getDifficultyBadge(lesson) {
    if(lesson.hasOwnProperty('difficulty')) {
      console.log(lesson['difficulty'])
      switch(lesson['difficulty']) {
        case "Easy":
          return (
            <Tag color="green">1</Tag>
          )
          break;
        case "Medium":
          return(
            <Tag color="orange">2</Tag>
          )
          break;
        case "Hard":
          return(
            <Tag color="red">3</Tag>
          )
          break;
      }
    }

  }

  getSubMenuComponent(history, props) {
    return props.map((lesson, i) => {
      const lessonSubmenu = lesson["subMenu"];
      return (
        <SubMenu
          key={lessonSubmenu["topic"]}
          title={lesson["topicTitle"]}
          style={{ textTransform: "capitalize" }}
          onTitleClick={(menu) => {
            this.setState({selectedSubMenus: [menu["key"]]})
          }}
          icon={this.getDifficultyBadge(lesson)}
        >
          {lessonSubmenu["title"].map((title, j) => {
            return (
              <Menu.Item
                key={lessonSubmenu["id"][j]}
                onClick={() => {
                  history.push(`/lessons/${lessonSubmenu["topic"]}/${lessonSubmenu["id"][j]}`);
                }}
              >
                {title}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    });
  }

  render() {
    const conceptItems = this.getSubMenuComponent(this.props.history, this.props.menuConcepts);
    const problemItems = this.getSubMenuComponent(this.props.history, this.props.menuProblems);

    return (
      <Sider
        width={350}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          selectedKeys={this.state.selectedItems}
          openKeys={this.state.selectedSubMenus}
        >
          <Menu.ItemGroup key="g1" title="CONCEPTS">
            {conceptItems}
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="PROBLEMS">
            {problemItems}
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideBarMenu);
