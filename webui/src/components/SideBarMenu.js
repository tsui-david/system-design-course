import React from 'react';

// Components
import { Menu, Layout } from 'antd';

//CSS
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const { Sider } = Layout;


function SideBarMenu(props) {

    console.log('hello', props.menuData);

    
    const menuItems = Object.keys(props.menuData).map((lesson, i) => {
        return (
            <SubMenu key={lesson + "_" + i} title={lesson} style={{"text-transform": "capitalize"}}>
                {
                    props.menuData[lesson].map((title, j) => 
                    {
                        return (
                            <Menu.Item key={title + "_" + j}>{title}</Menu.Item>
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
