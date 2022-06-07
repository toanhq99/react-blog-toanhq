import {Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogList() {
    return (
        <div className="block">
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
                            <tr>
                                <td>1</td>
                                <td>hôm nay là thứ 2</td>
                                <td>kinh doanh</td>
                                <td>yes</td>
                                <td>châu âu</td>
                                <td>2019-08-12</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>hôm nay là thứ 2</td>
                                <td>kinh doanh</td>
                                <td>yes</td>
                                <td>châu âu</td>
                                <td>2019-08-12</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>hôm nay là thứ 2</td>
                                <td>kinh doanh</td>
                                <td>yes</td>
                                <td>châu âu</td>
                                <td>2019-08-12</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>hôm nay là thứ 2</td>
                                <td>kinh doanh</td>
                                <td>yes</td>
                                <td>châu âu</td>
                                <td>2019-08-12</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default BlogList;