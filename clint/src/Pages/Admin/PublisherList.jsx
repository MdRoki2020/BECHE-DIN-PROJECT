import React, { Fragment } from 'react'
import { Badge, Table } from 'react-bootstrap'
import demo from'../../Assets/images/demo.jpg'

const PublisherList = () => {
  return (
    <Fragment>
        <div className='container-fluid'>
        <Badge bg="danger mb-3">
         Publisher List
        </Badge>

        <div className='orderTable'>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>District</th>
                <th>Publisher Image</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Rs</td>
                <td>Roki</td>
                <td>22</td>
                <td>01717453205</td>
                <td>mroki815@gmail.com</td>
                <td>Nilphamari</td>
                <td><img src={demo} alt="profile" width="110"/></td>
                <td>Kishorgonj</td>
                <td>Pushna</td>
                <td>xYG4HOIB6V</td>
                <td><Badge bg="danger">Pending</Badge></td>
                </tr>
            </tbody>
            </Table>

            </div>
        </div>
    </Fragment>
  )
}

export default PublisherList
