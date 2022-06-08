import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function BlogSearchForm() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState(null);
    const baseURL = "http://localhost:3000/blogs";

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect((q) => {
        axios.get(`${baseURL}/${q}`)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const searchTitleBlog = (textTitle) => {
        axios.get(`${baseURL}/?q=${textTitle}`)
            .then((res) => {
                setItems(res.data);
            })
            .catch((error) => console.log(error)
            );
    };

    const handleChangeSearch = (e) => {
        setQ(e.target.value);
        console.log(e.target.value);
    }

    if (error) {
        return (
            <p>
                {error.message}, if you get this error, the free API I used
                might have stopped working, but I created a simple example that
                demonstrate how this works,{" "}
                <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                    {" "}
                    check it out{" "}
                </a>{" "}
            </p>
        );
    } else if (!isLoaded) {
        return <>Loading...</>;
    } else {
        return (
            <div>
                <div className="block">
                    <div className="block-container">
                        <h2 className="block-header">Search Blog</h2>
                        <div className="block-body">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-title'>Title: </Form.Label>
                                    <Form.Control className='form-content' placeholder="Search" onChange={(e) => handleChangeSearch(e)} />
                                </Form.Group>
                                <div className='button'>
                                    <Button variant="outline-success" onClick={() => {searchTitleBlog(q)}}>Search</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

                <div className="block" >
                    <div className="block-container">
                        <h2 className="block-header">List Blog</h2>
                        <div className="block-body">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Tin</th>
                                        <th>Loại</th>
                                        <th>Trạng thái</th>
                                        <th>Vị trí</th>
                                        <th>Ngày public</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items?.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.category}</td>
                                            <td>{item.false}</td>
                                            <td>{item.position}</td>
                                            <td>{item.data_pubblic}</td>
                                            <td>
                                                <Button variant="primary">Edit</Button>
                                            </td>
                                            <td>
                                                <Button variant="danger">Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSearchForm;