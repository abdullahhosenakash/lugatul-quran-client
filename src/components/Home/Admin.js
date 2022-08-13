import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useWords from '../../hooks/useWords';

const Admin = () => {
    const [searchedText, setSearchedText] = useState('');
    const [words] = useWords(searchedText);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (words.length) {
            setErrorMessage('শব্দটি ইতিমধ্যে আপডেট করা হয়েছে');
        }
        else {
            setErrorMessage('');
        }
    }, [words])

    const handleUpdate = event => {
        event.preventDefault();
        const arabicWord = event.target.arabicWord.value;
        const banglaMeaning = event.target.banglaMeaning.value;
        const newWord = { arabicWord, banglaMeaning };
        fetch('https://damp-beyond-93367.herokuapp.com/postWord', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWord)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('শব্দটি যুক্ত হয়েছে!');
                }
            })
    }

    return (
        <div className='container mt-5 pt-4 home-page'>
            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3 text-end arabic-word-input" controlId="exampleForm.ControlInput2">
                    <Form.Control type="text" name='arabicWord' className='text-end fs-1' placeholder="আরবী শব্দ" onChange={e => setSearchedText(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3 text-end bangla-meaning-input" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" name='banglaMeaning' className='text-end fs-1' placeholder="শব্দার্থ" required />
                </Form.Group>
                <button className="btn btn-dark d-inline-block mb-4 py-3 update-button" disabled={errorMessage}>আপডেট</button>
                <p className="text-dark fs-5">{errorMessage}</p>
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