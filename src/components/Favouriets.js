import axios from 'axios'
import React, { Component } from 'react'
import FavCards from './FavCards';
import FormModal from './FormModal';
class Favouriets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            id: '',
            name: '',
            img: '',
            price: 0,
            showModal: false
        }
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_HOST}/getData`).then(res => {
            this.setState({
                favData: res.data,
                showModal: false
            });
        })
    };
    handleDelete = async (id) => {
        let config = {
            method: "DELETE",
            url: `${process.env.REACT_APP_SERVER_HOST}/deleteData/${id}`,
        };
        axios(config).then(res => {
            this.setState({
                favData: res.data
            });
        });
    };
    handleUpdate = async (id, name, img, price) => {
         this.setState({
            id: id,
            name:name,
            img:img,
            price:price,
            showModal: true
        });

    };
    handleEdit = async (e) => {
        e.preventDefault();
        let config = {
            method: "PUT",
            url: `${process.env.REACT_APP_SERVER_HOST}/updateData/${this.state.id}`,
            data: {
                name: e.target.name.value,
                image: e.target.image.value,
                price:e.target.price.value
            }
        };
        axios(config).then(res => {
            this.setState({
                favData: res.data,
                showModal: false
            });
        });

    };
    handleHide= ()=>{
        this.setState({
            showModal:false
        })
    }
    render() {
        return (
            <div>
                <FavCards favData={this.state.favData}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate} />

             <FormModal name ={this.state.name}
                           image={this.state.img}
                           price={this.state.price}
                           handleEdit={this.handleEdit}
                           showModal={this.state.showModal}
                           handleHide={this.handleHide}/>

            </div>
        )
    }
}

export default Favouriets
