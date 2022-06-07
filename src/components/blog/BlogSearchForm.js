import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from './BlogList';

function BlogSearchForm() {
    return (
        <div>
            <div className="block">
                <div className="block-container">
                    <h2 className="block-header">Search Blog</h2>
                    <div className="block-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='form-title'>Title: </Form.Label>
                                <Form.Control className='form-content' placeholder="Search" />
                            </Form.Group>
                            <div className='button'>
                                <Button variant="outline-success">Success</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <BlogList></BlogList>
        </div>
    );
}

export default BlogSearchForm;