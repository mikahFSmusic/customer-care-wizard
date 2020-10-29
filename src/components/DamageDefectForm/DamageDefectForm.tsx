import React, { FormEvent } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LevelOneForm from './LevelOne';
import LevelTwoForm from './LevelTwo';
import LevelThreeForm from './LevelThree';
import DiscountToKeep from './FormComponents/DiscountToKeep';
import RefundAmount from './FormComponents/RefundAmount';
import NarvarReturn from './FormComponents/NarvarReturn';

const DamageDefectForm = () => {
    const [levelPath, setLevelPath] = useState<string>();
    const [levelElement, setLevelElement] = useState<Array<JSX.Element>>();
    const [formElements, setFormElements] = useState<Array<JSX.Element>>([<div></div>]);

    const handleFormPath = (event:FormEvent<HTMLDivElement>) => {
        // gets element object
        const el = event.target as HTMLDivElement

        // gets id of element object
        const id = el.getAttribute('id');

        // sets form path state dependent on id of selected radio
        if (id === 'lvl1') {
            setLevelPath(id);
            setLevelElement(levelOneElements);
            // setFormElements(formElements => levelOneElements)
        } else if (id === 'lvl2') {
            setLevelPath(id);
            setLevelElement(levelTwoElements);
            // setFormElements(formElements => levelTwoElements)
        } else if (id=== 'lvl3' ) {
            setLevelElement(levelThreeElements);
            setLevelPath(id);
            // setFormElements(formElements => levelThreeElements)
        }
    }

    const handleDiscountToKeep = (id: string | null) => {
        if (id === 'discountToKeep') {
            setFormElements(formElements => [<RefundAmount />])
        } else if (id === 'refund') {
            setFormElements(formElements => [<NarvarReturn />])
        }
    }

    const levelOneElements = [<LevelOneForm />,
        <DiscountToKeep onChange={handleDiscountToKeep}/>]
    const levelTwoElements = [<LevelTwoForm />,
        <DiscountToKeep onChange={handleDiscountToKeep}/>]
    const levelThreeElements = [<LevelThreeForm />,
        <DiscountToKeep onChange={handleDiscountToKeep}/>]


    const handleSubmit = () => {
        // TODO: write form results to json for testing
        console.log('form submitted');
    }

    const damageDefectFormStyle = {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
    const formContainerStyle = {
        backgroundColor: 'white',
        width: '100%',
        display:'flex',
        justifyContent: 'center',
        overflow: 'scroll'
    }
    return (
        <div className="Damage-defect-form" style={damageDefectFormStyle}>
            <br />
            <h2>Damage/Defect Form</h2>
            <br />
            <div className="Form-container" style={formContainerStyle}>
                <Form style={{alignSelf: 'center', width: '33%', margin:0}} onSubmit={handleSubmit}>
                    <br />
                    <Form.Group>
                        <Form.Label>Purchase Received?</Form.Label>
                        <Form.Control as="select" defaultValue="Yes or No">
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Order #</Form.Label>
                        <Form.Control type="text" placeholder="Enter Order #" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Vendor</Form.Label>
                        <Form.Control as="select" defaultValue="Choose Vendor...">
                            <option>Choose Vendor...</option>
                            <option>Vendor 1</option>
                            <option>Vendor 2</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>SKU #</Form.Label>
                        <Form.Control type="text" placeholder="Enter SKU #" />
                    </Form.Group>
                    <Form.Group onChange={handleFormPath}>
                        <Form.Label as="legend">Damage Level</Form.Label>
                        <Form.Check name="damageLevelRadios" type="radio" label="Level 1" id="lvl1"/>
                        <Form.Check name="damageLevelRadios" type="radio" label="Level 2" id="lvl2"/>
                        <Form.Check name="damageLevelRadios" type="radio" label="Level 3" id="lvl3"/>
                    </Form.Group>

                    {/* Dynamic Form Components */}
                    {/* Initial Path Selection*/}
                    <div>
                        {levelElement}
                        {formElements}
                    </div>
                    <br />
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <br />
                </Form>
            </div>
        </div>
    )
}

export default DamageDefectForm;