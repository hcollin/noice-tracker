import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


export default class MainFooter extends React.Component {
    render() {
        return (
            <div id="MainFooter" className="layout-footer el-basic-bg">
                <p>&copy; Henrik Collin 2017</p>
            </div>
        );
    }
}