import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const RestaurantEdit = (props) => {
    const [editZip, setEditZip] = useState(props.restaurantToUpdate.zipcode);
    const [editPrice, setEditPrice] = useState(props.restaurantToUpdate.price);
    const [editTopping, setEditTopping] = useState(props.restaurantToUpdate.topping);
    const [editSoup, setEditSoup] = useState(props.restaurantToUpdate.soup);

    const RestaurantUpdate = (event, restaurant) => {
        event.preventDefault();
        fetch()
    }



    return(
        <Modal isOpen={true}>
            <ModalHeader>Want to update?</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor="zipcode">Edit Zipcode</Label>
                        <Input type="text" name="zip" value={editZip} onChange={(e)=> setEditZip(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="price">Edit Price(choose one)</Label>
                        <Input type="select" name="price" value={editPrice} onChange={(e)=> setEditPrice(e.target.value)}>
                        <option value="under 10">under $10</option>
                        <option value="10 - 15">$10 - 15</option>
                        <option value="15 - 20">$15 - 20</option>
                        <option value="over 20">over $20</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="topping">Edit Topping</Label>
                        <Input type="text" name="topping" value={editTopping} onChange={(e)=> setEditTopping(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="soup">Soup type(choose one)</Label>
                        <Input type="select" name="soup" value={editSoup} onChange={(e)=> setEditSoup(e.target.value)}>
                        <option value="salt">Salt (塩 Shio)</option>
                        <option value="soy sauce">Soy sauce (醤油 Shoyu)</option>
                        <option value="miso">Miso (味噌 Bean paste)</option>
                        <option value="Tonkotsu">Tonkotsu (豚骨 Pork born)</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Update!</Button>
                </Form>
            </ModalBody>
        </Modal>
        
    )
}

export default RestaurantEdit;