import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getByTitle } from '@testing-library/react';

function BlogCreateEdit() {
    const baseURL = "http://localhost:3000/blogs";
    const [oldBlog, setOldBlog] = useState([]);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [detail, setDetail] = useState("");
    const [category, setCategory] = useState('');
    const [pubiasdasc, setPublic] = useState(false);
    const [data_pubblic, setDataPubblic] = useState("");
    const [position, setPosition] = useState([]);
    const { id } = useParams();

    const handlePosition = event => {
        let newArray = [...position, event.target.value];
        if (position.includes(event.target.value)) {
            newArray = newArray.filter(position => position !== event.target.value);
        }
        setPosition(newArray)
    };

    const getOldBlog = () => {
        axios.get(`${baseURL}/${id}`)
            .then(res => {
                setOldBlog(res.data)
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title: e.target.title.value,
            des: e.target.des.value,
            detail: e.target.detail.value,
            category: e.target.category.value,
            public: e.target.public.value,
            data_pubblic: e.target.data_pubblic.value,
            position: e.target.position.value
        }
        console.log(blog);
        if (id) {
            setTitle(oldBlog.title)
            setDes(oldBlog.des)
            setDetail(oldBlog.detail)
            setCategory(oldBlog.category)
            setPublic(oldBlog.public)
            setDataPubblic(oldBlog.data_pubblic)
            setPosition(oldBlog.position)

            axios
                .put(`${baseURL}/${id}`, blog)
                .then(res => {
                })
                .catch((error) => console.log(error)
                );
        } else {
            axios
                .post(`${baseURL}`, blog)
                .then((res) => {
                })
                .catch((error) => console.log(error)
                );
        }
    };

    useEffect(() => {
        getOldBlog(id)
        setTitle(oldBlog.title)
        setDes(oldBlog.des)
        setDetail(oldBlog.detail)
        setCategory(oldBlog.category)
        setPublic(oldBlog.public)
        setDataPubblic(oldBlog.data_pubblic)
        setPosition(oldBlog.position)
    }, [id])

    return (
        <div>
            <div className="block">
                <div className="block-container">
                    <h2 className="block-header">New Blog</h2>
                    <div className="block-body">
                        <Form key={oldBlog.id} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='mt-2 ms-3'>Tiêu đề: </Form.Label>
                                <Form.Control className='mx-3' name="title" defaultValue={oldBlog.title} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Mô tả ngắn: </Form.Label>
                                <Form.Control className='mx-3' name="des" as="textarea" rows={5} defaultValue={oldBlog.des} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Chi tiết: </Form.Label>
                                <Form.Control className='mx-3' name="detail" as="textarea" rows={10} defaultValue={oldBlog.detail} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='mx-3'>Hình ảnh: </Form.Label>
                                <Form.Control className='mx-3' name="" type="file" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox">
                                <Form.Label className='mx-3'>Vị trí: </Form.Label>
                                <Form.Check className="me-3" type="checkbox" label="Việt Nam" defaultValue={oldBlog.public ? 1 : null} name="position" value="1" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Á" defaultValue={oldBlog.public ? 2 : null} name="position" value="2" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Âu" defaultValue={oldBlog.public ? 3 : null} name="position" value="3" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Mĩ" defaultValue={oldBlog.public ? 4 : null} name="position" value="4" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox" >
                                <Form.Label className='mx-3'  >Public: </Form.Label>
                                <Form.Check className="me-3" type="radio" defaultValue={oldBlog.public ? false : true} name="public" label="Yes" />
                                <Form.Check className="me-3" type="radio" defaultValue={oldBlog.public ? true : false} name="public" label="No" />
                            </Form.Group>

                            <Form.Group className="mb-3 chosen-box" controlId="formGridState">
                                <Form.Label className='mx-3 mb-6'>Loại</Form.Label>
                                <Form.Select name="category" className="mx-3" defaultValue={oldBlog.category} >
                                    <option>Choose</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Form.Select>
                                <Form.Label className='mx-3 mb-6'>Date Public</Form.Label>
                                <Form.Control className='mx-3' type='date' name="data_pubblic" defaultValue={oldBlog.data_pubblic} />
                            </Form.Group>

                            <div className='block-footer p-3' >
                                <Button type='submit' variant="success">Submit</Button>{' '}
                                <Button variant="primary">
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlogCreateEdit;