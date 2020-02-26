/* eslint-disable */
import React from 'react';
import './css/phone.css'
import '../../css/animate.css'
import Android from './components/Android';
import EventManager from "../../EventManager";

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Phone.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('phone', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            } else if (value.type === 'hide') {
                this.setState({ show: false })
            } else if (value.type === 'showOrHide') {
                let status = !this.state.show;
                this.setState({ show: status })
                try {
                    mp.trigger('client:phone:status', status); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('phone');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="phone-position">
                    <Android />
                </div>
            </React.Fragment>
        )
    }
}

export default Phone;
