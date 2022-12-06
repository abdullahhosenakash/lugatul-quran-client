import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import useWords from '../../hooks/useWords';
import '../Shared/Shared.css';

const Home = () => {
  const [searchedText, setSearchedText] = useState('');
  const [words, loading] = useWords(searchedText);

  return (
    <div className="container mt-5 pt-4 home-page">
      <Form.Group
        className="mb-3 text-end"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="text"
          className={`text-end input-field-height 
          ${searchedText ? 'input-field-font-size' : 'fs-1'}`}
          placeholder="আরবী শব্দ খুঁজুন"
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </Form.Group>

      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr className="fs-4">
            <th>শব্দার্থ</th>
            <th className="w-50">আরবী শব্দ</th>
          </tr>
        </thead>
        <tbody>
          {words.length ? (
            words.map((word, index) => (
              <tr key={index}>
                <td className="fs-5 align-middle">{word.banglaMeaning}</td>
                <td className="arabic-word-result align-middle">
                  {word.arabicWord}
                </td>
              </tr>
            ))
          ) : searchedText ? (
            loading ? (
              <tr>
                <td colSpan={2} className="text-success fs-4">
                  শব্দটি খোজা হচ্ছে
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={2} className="text-danger fs-4">
                  দুঃখিত! শব্দটি পাওয়া যায়নি অথবা এখনও ডাটাবেজে যোগ করা হয়নি
                </td>
              </tr>
            )
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
