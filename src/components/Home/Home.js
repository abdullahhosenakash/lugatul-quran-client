import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import useWords from '../../hooks/useWords';
import '../Shared/Shared.css';

const Home = () => {
    const [searchedText, setSearchedText] = useState('');
    const [words] = useWords(searchedText);

    return (
        <div className='container mt-5 pt-4 home-page'>
            <Form.Group className="mb-3 text-end" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" className='text-end fs-1' placeholder="আরবী শব্দ খুঁজুন" onChange={e => setSearchedText(e.target.value)} />
            </Form.Group>

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

export default Home;