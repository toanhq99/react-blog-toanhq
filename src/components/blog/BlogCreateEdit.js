import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogCreateEdit() {
    return (
        <div>
            <div className="block">
                <div className="block-container">
                    <h2 className="block-header">Search Blog</h2>
                    <div className="block-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='mt-2 ms-3'>Tiêu đề: </Form.Label>
                                <Form.Control className='mx-3' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Mô tả ngắn: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={5} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='mx-3'>Chi tiết: </Form.Label>
                                <Form.Control className='mx-3' as="textarea" rows={10} />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='mx-3'>Hình ảnh: </Form.Label>
                                <Form.Control className='mx-3' type="file" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox">
                                <Form.Label className='mx-3'>Vị trí: </Form.Label>
                                <Form.Check className="me-3" type="checkbox" label="Việt Nam" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Á" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Âu" />
                                <Form.Check className="me-3" type="checkbox" label="Châu Mĩ" />
                            </Form.Group>

                            <Form.Group className="m-3 blog-checkbox" controlId="formBasicCheckbox">
                                <Form.Label className='mx-3'>Public: </Form.Label>
                                <Form.Check className="me-3" type="radio" label="Yes" />
                                <Form.Check className="me-3" type="radio" label="No" />
                            </Form.Group>

                            <Form.Group className="mb-3 chosen-box" controlId="formGridState">
                                <Form.Label className='mx-3 mb-6'>Loại</Form.Label>
                                <Form.Select className="mx-3" defaultValue="Choose...">
                                    <option>Choose</option>
                                    <option>1</option>
                                    <option>2</option>
                                </Form.Select>
                                <Form.Label className='mx-3 mb-6'>Date Public</Form.Label>
                                <Form.Control className='mx-3' type='date' />
                            </Form.Group>

                        </Form>
                    </div>
                    <div className='block-footer p-3'>
                        <Button variant="success">Success</Button>{' '}
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