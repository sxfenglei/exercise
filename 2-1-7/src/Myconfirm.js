import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Myconfirm.css';

class Myconfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || '提示框',
            content: props.content || '',
            visible: true
        };
        this.closeModal = this.closeModal.bind(this);
        this.confirmModal = this.confirmModal.bind(this);
    }
    closeModal(){
        this.setState({
            visible:false
        })
        alert('取消');
    }
    confirmModal(){
        this.setState({
            visible:true
        })
        alert('确定');
    }
    render() {
        return (
            <div className="myconfirm-wrapper" style={this.state.visible ? {display:'block'} : {display:'none'}}>
                <div className="myconfirm">
                    <div className="myconfirm-title">{this.state.title}</div>
                    <div className="myconfirm-content">{this.state.content}</div>
                    <div className="myconfirm-operator">
                        <button className="myconfirm-operator-close" onClick={this.closeModal}>取消</button>
                        <button className="myconfirm-operator-confirm" onClick={this.confirmModal}>确认</button>
                    </div>
                </div>
                <div className="myconfirm-mask"></div>
            </div>
        );
    }
}

Myconfirm.defaultProps = {};
Myconfirm.propTypes = {
    visible: PropTypes.bool,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
};

export default Myconfirm