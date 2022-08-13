import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import useWords from '../../hooks/useWords';

const Admin = () => {
    const [searchedText, setSearchedText] = useState('');
    const [words] = useWords(searchedText);
    return (
        <div className='container mt-5 pt-4 home-page'>
            <Form>
                <Form.Group className="mb-3 text-end bangla-meaning-input" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" className='text-end fs-1' placeholder="শব্দার্থ" onChange={e => setSearchedText(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 text-end arabic-word-input" controlId="exampleForm.ControlInput2">
                    <Form.Control type="text" className='text-end fs-1' placeholder="আরবী শব্দ" onChange={e => setSearchedText(e.target.value)} />
                </Form.Group>
                <button className="btn btn-dark d-inline-block mb-4 py-3 update-button">আপডেট</button>
            </Form>

            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr className='fs-4'>
                        <th>শব্দার্থ</th>
                        <th className='w-50'>আরবী শব্দ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        words.map(word =>
                            <tr>
                                <td className='fs-5'>{word.banglaMeaning}</td>
                                <td className='fs-1'>{word.arabicWord}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;