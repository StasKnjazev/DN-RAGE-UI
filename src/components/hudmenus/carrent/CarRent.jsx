import React from 'react'
import './css/main.css'
import Header from './components/Header';
import Car from './components/Car';

class CarRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            banner: 'bs_hair',
            bgcolor: '#252525',
            cars: [
                {
                    price: 200,
                    name: 'Elegy'
                },
                {
                    price: 444,
                    name: 'Elegy2'
                },
                {
                    price: 200,
                    name: 'Toros'
                },
                {
                    price: 444,
                    name: 'Thrax'
                },
                {
                    price: 200,
                    name: 'Nexus'
                },
                {
                    price: 444,
                    name: 'Faggio'
                },
                {
                    price: 200,
                    name: 'Faggio2'
                },
                {
                    price: 444,
                    name: 'Faggio3'
                }
            ]
        }
    }

    setHide = () => {
        this.setState({
            show: false
        })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="carrent__container">
                <div className="carrent__content">
                    <Header
                        bgcolor={this.state.bgcolor}
                        banner={this.state.banner}
                        title=""
                        setHide={this.setHide}
                    />
                    <div className="carrent__content__list__container">
                        <div className="carrent__content__list">
                        {this.state.cars.map((item, index) => (
                            <Car
                                price={item.price}
                                name={item.name}
                                key={`carrent__content__list__item-${index}`}
                                btnbg="#000"
                            />
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CarRent