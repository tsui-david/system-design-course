import React from 'react';

// Components
import { Menu, Layout } from 'antd';

// Routing
import { useHistory } from "react-router-dom";

//CSS
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const { Sider } = Layout;


function SideBarMenu(props) {

    console.log('hello', props.menuData);

    let history = useHistory();
    
    const menuItems = Object.keys(props.menuData).map((lesson, i) => {
        return (
            <SubMenu key={lesson + "_" + i} title={lesson} style={{"textTransform": "capitalize"}}>
                {
                    props.menuData[lesson]["title"].map((title, j) => 
                    {
                        return (
                            <Menu.Item key={title + "_" + j} onClick={() => history.push(`/lessons/${props.menuData[lesson]["id"][j]}`)}>{title}</Menu.Item>
                        )
                    })
                }
            </SubMenu>
        )
    });

    return (
        <Sider width={300}>
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
                {menuItems}
            </Menu>
        </Sider>
    );
};

export default SideBarMenu;
