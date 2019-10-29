"use strict";
import React, { Component  } from 'react';
import {Text, View,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeView from '../../packges/home';
import FindView from '../../packges/find';
import NewView from '../../packges/news';
import ShopView from '../../packges/shopping';
import MineView from '../../packges/mine';

import styles from '../../styles/tableBar'

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    };
    state(){

    }
    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    titleStyle={{fontWeight:'700'}}
                    selectedTitleStyle={{color:'#E2231A',fontWeight:'700'}}
                    renderIcon={() => <Text style={styles.font}>{'\ue64f'}</Text>}
                    renderSelectedIcon={() => <Text style={styles.actions}>{'\ue64f'}</Text>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <HomeView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    titleStyle={{fontWeight:'700'}}
                    selectedTitleStyle={{color:'#E2231A',fontWeight:'700'}}
                    renderIcon={() => <Text style={styles.font}>{'\ue650'}</Text>}
                    renderSelectedIcon={() => <Text style={styles.actions}>{'\ue650'}</Text>}
                    onPress={() => this.setState({ selectedTab: 'find' })}>
                    <FindView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'news'}
                    title="消息"
                    titleStyle={{fontWeight:'700'}}
                    selectedTitleStyle={{color:'#E2231A',fontWeight:'700'}}
                    renderIcon={() => <Text style={styles.font}>{'\ue681'}</Text>}
                    renderSelectedIcon={() => <Text style={styles.actions}>{'\ue681'}</Text>}
                    onPress={() => this.setState({ selectedTab: 'news' })}>
                    <NewView/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="购物车"
                    titleStyle={{fontWeight:'700'}}
                    selectedTitleStyle={{color:'#E2231A',fontWeight:'700'}}
                    renderIcon={() => <Text style={styles.font}>{'\ue657'}</Text>}
                    renderSelectedIcon={() => <Text style={styles.actions}>{'\ue657'}</Text>}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <ShopView/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    titleStyle={{fontWeight:'700'}}
                    selectedTitleStyle={{color:'#E2231A',fontWeight:'700'}}
                    renderIcon={() => <Text style={styles.font}>{'\ue611'}</Text>}
                    renderSelectedIcon={() => <Text style={styles.actions}>{'\ue611'}</Text>}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <MineView/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

}