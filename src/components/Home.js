import axios from 'axios';
import React, { Component } from 'react';
import FruitsCard from './FruitsCard';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldata: []
        }
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_HOST}/all`).then(res => {
            this.setState({
                alldata: res.data
            });
        })
    };

    addFav = async (name,img,price) => {
        let config = {
            method: "POST",
            url: `${process.env.REACT_APP_SERVER_HOST}/createData`,
            data: {
                name: name,
                image: img,
                price: price
            }
        }
        axios(config)
    }
    render() {
        return (
            <div>


                <FruitsCard alldata={this.state.alldata}
                    addFav={this.addFav} />



            </div>
        )
    }
}

export default Home
