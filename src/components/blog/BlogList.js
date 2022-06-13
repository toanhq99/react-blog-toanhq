import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import editBlog from './BlogCreateEdit';
import BlogCreateEdit from './BlogCreateEdit';
import { Route, Recipe, Link } from "react-router-dom";

function BlogList() {
    const baseURL = "http://localhost:8000/api/blog";
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [id, setId] = useState("");
    const [blogs, setBlogs] = useState([]);

    const getBlogList = async () => {
        const {data} = await axios.get(`${baseURL}/get/all`);
        const blog = data;
        setBlogs(blog);
        console.log(blog);
        console.log(blogs);
    };

    // Note: the empty deps array [] means
    // this useEffect will run once
    // tương tự với componentDidMount()
    useEffect(() => {
        getBlogList()
    }, [])

    /**blogs
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
            .get(`${baseURL}/${id}`)
            .then((res) => {
                setId(res.data.id);
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
                                {blogs.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.isPublic}</td>
                                        <td>{item.position}</td>
                                        <td>{item.dataPublic}</td>
                                        <td>
                                            <Link to={`new/` + item.id}>
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