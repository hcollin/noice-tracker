import React from 'react';
import MainLeftSideBar from './MainLeftSideBar';
import MainRightSideBar from './MainRightSideBar';
import MainView from './MainView';

export default class MainContent extends React.Component {
    render() {
        return (
            <div id="MainContent" className="layout-content">
                <MainLeftSideBar />
                <MainView />
                <MainRightSideBar />
            </div>
        );
    }
}