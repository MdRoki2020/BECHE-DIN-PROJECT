import React, { Fragment } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import laptop from '../../Assets/images/laptop.jpg'
import { FiEdit, } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const LaptopList = () => {
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
                <td><img src={laptop} alt="laptop" width="110"/></td>
                <td>12-1-22</td>
                <td><span className='text-primary'><FiEdit/></span> <span className='text-danger'><AiOutlineDelete/></span></td>
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

export default LaptopList