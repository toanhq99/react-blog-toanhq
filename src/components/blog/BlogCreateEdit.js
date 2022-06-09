import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogCreateEdit() {
    const baseURL = "http://localhost:3000/blogs";
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [detail, setDetail] = useState("");
    const [category, setCategory] = useState("");
    const [pubLic, setPublic] = useState(true);
    const [data_pubblic, setDataPubblic] = useState("");
    const [position, setPosition] = useState([]);

    const handleTitle = e => {
        setTitle(e.target.value);
    }

    const handleDes = e => {
        setDes(e.target.value);
    }

    const handleDetail = e => {
        setDetail(e.target.value);
    }

    const handleCategory = e => {
        setCategory(e.target.value);
    }

    const handlePublic = e => {
        setPublic(e.target.value);
    }

    const handleDataPublic = e => {
        setDataPubblic(e.target.value);
    }

    const handlePosition = event => {
        let newArray = [...position, event.target.value];
        if (position.includes(event.target.value)) {
            newArray = newArray.filter(position => position !== event.target.value);
        }
        setPosition(newArray)
    };

    const blog = {
        title: title,
        des: des,
        detail: detail,
        category: category,
        public: pubLic,
        data_pubblic: data_pubblic,
        position: position
    }

    const createBlog = () => {
        axios
            .post(`${baseURL}`, blog)
            .then((res) => {

            })
            .catch((error) => console.log(error)
            );
    };

    const editBlog = (id) => {
        // const oldBlog ={
        //     title: 
        // }
        axios
            .put(`${baseURL}/${id}`, blog)
            .then((res) => {

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
                                <Form.Control className='mx-3' name="name" value={title} onChange={handleTitle} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Mô tả ngắn: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={5} value={des} onChange={handleDes} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Chi tiết: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={10} value={detail} onChange={handleDetail} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='mx-3'>Hình ảnh: </Form.Label>
                                <Form.Control className='mx-3' type="file" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox">
                                <Form.Label className='mx-3'>Vị trí: </Form.Label>
                                <Form.Check className="me-3" type="checkbox" label="Việt Nam" value={1} onChange={handlePosition} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Á" value={2} onChange={handlePosition} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Âu" value={3} onChange={handlePosition} />
                                <Form.Check className="me-3" type="checkbox" label="Châu Mĩ" value={4} onChange={handlePosition} />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox">
                                <Form.Label className='mx-3'>Public: </Form.Label>
                                <Form.Check className="me-3" type="radio" label="Yes" value={true} onChange={handlePublic} />
                                <Form.Check className="me-3" type="radio" label="No" value={false} onChange={handlePublic} />
                            </Form.Group>

                            <Form.Group className="mb-3 chosen-box" controlId="formGridState">
                                <Form.Label className='mx-3 mb-6'>Loại</Form.Label>
                                <Form.Select className="mx-3" defaultValue="Choose..." onChange={handleCategory}>
                                    <option>Choose</option>
                                    <option value={1} >1</option>
                                    <option value={2} >2</option>
                                </Form.Select>
                                <Form.Label className='mx-3 mb-6'>Date Public</Form.Label>
                                <Form.Control className='mx-3' type='date' value={data_pubblic} onChange={handleDataPublic} />
                            </Form.Group>

                        </Form>
                    </div>

                    <div className='block-footer p-3'>
                        <Button variant="success" onClick={() => { createBlog() }}>Submit</Button>{' '}
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