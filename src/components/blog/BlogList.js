import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function BlogList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // tương tự với componentDidMount()
    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                }
            )
    }, [])

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
        );
    }
}

export default BlogList;