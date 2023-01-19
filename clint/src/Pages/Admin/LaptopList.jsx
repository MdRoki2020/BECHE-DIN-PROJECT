import React, { Fragment } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import laptop from '../../Assets/images/laptop.jpg'
import '../../Assets/style/adminDashboard.css'

const LaptopList = () => {
  return (
    <Fragment>
        <div className='container-fluid'>
        <Badge bg="danger mb-3">
         Product List
        </Badge>

        <div className='orderTable card'>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Color</th>
                <th>Battery mAh</th>
                <th>Warranty</th>
                <th>Author</th>
                <th>Image</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='animated fadeInUp'>1</td>
                <td className='animated fadeInUp'>Vivobook 15</td>
                <td className='animated fadeInUp'>Asus</td>
                <td className='animated fadeInUp'>65,500</td>
                <td className='animated fadeInUp'>Silver</td>
                <td className='animated fadeInUp'>10,000</td>
                <td className='animated fadeInUp'>2 years</td>
                <td className='animated fadeInUp'>Star Teach</td>
                <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={laptop} alt="laptop" width="50"/></td>
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

export default LaptopList
