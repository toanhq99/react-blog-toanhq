import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import editBlog from './BlogCreateEdit';
import BlogCreateEdit from './BlogCreateEdit';
import { Route, Recipe, Link } from "react-router-dom";

function BlogList() {
    const baseURL = "http://localhost:3000/blogs";
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // tương tự với componentDidMount()
    useEffect(() => {
        getBlogList()
    }, [])

    const getBlogList = () => {
        fetch(`${baseURL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                }
            )
    }

    /**
     * Delete blog
     */
    const deleteBlog = (id) => {
        axios
            .delete(`${baseURL}/${id}`)
            .then((res) => {
                getBlogList()
            })
            .catch((error) => console.log(error)
            );
    };

    /**
     * Get blogId
     */
    const getBlogId = (id) => {
        axios
            .put(`${baseURL}/?q=${id}`)
            .then((res) => {
                console.log(id);
            })
            .catch((error) => console.log(error)
            );
    }

    if (!isLoaded) {
        return <h2>Loading...</h2>
    }
    else {
        return (
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
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.false}</td>
                                        <td>{item.position}</td>
                                        <td>{item.data_pubblic}</td>
                                        <td>
                                            <Link to={`new/`+item.id}>
                                                <Button variant="primary" onClick={() => { getBlogId(item.id) }}>Edit</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => { deleteBlog(item.id) }}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
        );
    }
}

export default BlogList;