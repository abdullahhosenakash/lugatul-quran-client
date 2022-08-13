import React from 'react';
import { Form, Table } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className='container mt-5 home-page'>
            <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" className='text-end fs-1' placeholder="name@example.com" />
            </Form.Group>
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr className='fs-4'>
                        <th>শব্দার্থ</th>
                        <th className='w-50'>আরবী শব্দ</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fs-5'>আল্লাহর নামে জকাসধ জা হজসাহদ দশাহ দসজদাশ কাঁধ</td>
                        <td className='fs-1'>بِسْمِ اللَّهِ</td>
                    </tr>
                    <tr>

                        <td className='fs-5'>আল্লাহর নামে</td>
                        <td className='fs-1'>بِسْمِ اللَّهِ</td>
                    </tr>
                    <tr>

                        <td className='fs-5'>আল্লাহর নামে</td>
                        <td className='fs-1'>بِسْمِ اللَّهِ</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Home;