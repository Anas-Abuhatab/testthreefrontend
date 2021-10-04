import React, { Component } from 'react';
import { Form, Modal, Button } from 'react-bootstrap'

class FormModal extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.showModal} onHide={this.props.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => { this.props.handleEdit(e) }}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Update Name</Form.Label>
                                <Form.Control type="text" name="name" defaultValue={this.props.name} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Update image</Form.Label>
                                <Form.Control type="text" name="image" defaultValue={this.props.image} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Update price</Form.Label>
                                <Form.Control type="text" name="price" defaultValue={this.props.price} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormModal



   

