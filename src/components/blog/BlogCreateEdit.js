import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogCreateEdit() {
    const baseURL = "http://localhost:3000/blogs";
    const [blogId, setBlogId] = useState(null);
    const [title, setTitle] = useState(null);
    const [des, setDes] = useState(null);
    const [detail, setDetail] = useState(null);
    const [category, setCategory] = useState(null);
    const [pubLic, setPublic] = useState(null);
    const [data_pubblic, setDataPubblic] = useState(null);
    const [position, setPosition] = useState(null);

    const blog = e => {
        setTitle({title: e.target.value});
        setDes({title: e.target.value});
        setDetail({title: e.target.value});
        setCategory({title: e.target.value});
        setPublic({title: e.target.value});
        setDataPubblic({title: e.target.value});
        setPosition({title: e.target.value});
    }

    useEffect(() => {
        axios
            .post(`${baseURL}`, blog)
            .then(res => {
                setBlogId(res.data.id);
            })
    })

    const createBlog = (blog) => {
        axios
            .post(`${baseURL}`, {blog})
            .then((res) => {
                setBlogId(res.data.id);
            })
            .catch((error) => console.log(error)
            );
    };

    return (
        <div>
            <div className="block">
                <div className="block-container">
                    <h2 className="block-header">Search Blog</h2>
                    <div className="block-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='mt-2 ms-3'>Tiêu đề: </Form.Label>
                                <Form.Control className='mx-3' name="name" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Mô tả ngắn: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={5} value={des} onChange={(e) => { setDes(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Chi tiết: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={10} value={detail} onChange={(e) => { setDetail(e.target.value) }} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='mx-3'>Hình ảnh: </Form.Label>
                                <Form.Control className='mx-3' type="file" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox">
                                <Form.Label className='mx-3'>Vị trí: </Form.Label>
                                <Form.Check className="me-3" type="checkbox" label="Việt Nam" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Á" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Âu" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Mĩ" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox">
                                <Form.Label className='mx-3'>Public: </Form.Label>
                                <Form.Check className="me-3" type="radio" label="Yes" value={pubLic} onChange={(e) => { setPublic(e.target.value) }} />
                                <Form.Check className="me-3" type="radio" label="No" value={pubLic} onChange={(e) => { setPublic(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3 chosen-box" controlId="formGridState">
                                <Form.Label className='mx-3 mb-6'>Loại</Form.Label>
                                <Form.Select className="mx-3" defaultValue="Choose...">
                                    <option>Choose</option>
                                    <option value={category} onChange={(e) => { setCategory(e.target.value) }}>1</option>
                                    <option value={category} onChange={(e) => { setCategory(e.target.value) }}>2</option>
                                </Form.Select>
                                <Form.Label className='mx-3 mb-6'>Date Public</Form.Label>
                                <Form.Control className='mx-3' type='date' value={data_pubblic} onChange={(e) => { setDataPubblic(e.target.value) }} />
                            </Form.Group>

                        </Form>
                    </div>
                    <div className='block-footer p-3'>
                        <Button variant="success" onClick={() => {createBlog(blog)}}>Submit</Button>{' '}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCreateEdit;