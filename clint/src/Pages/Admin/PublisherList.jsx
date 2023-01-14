import React, { Fragment } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
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
                <td className='animated fadeInUp'>1</td>
                <td className='animated fadeInUp'>Rs</td>
                <td className='animated fadeInUp'>Roki</td>
                <td className='animated fadeInUp'>22</td>
                <td className='animated fadeInUp'>01717453205</td>
                <td className='animated fadeInUp'>mroki815@gmail.com</td>
                <td className='animated fadeInUp'>Nilphamari</td>
                <td className='animated fadeInUp'><img src={demo} alt="profile" width="110"/></td>
                <td className='animated fadeInUp'>12-1-22</td>
                <td className='animated fadeInUp'><span><Badge bg="danger mb-3">Suspend</Badge></span></td>
                </tr>
            </tbody>
            </Table>

            </div>
        </div>
        <div className=''>
        <ReactPaginate 
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          // pageCount={pageCount}
          // onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </Fragment>
  )
}

export default PublisherList
