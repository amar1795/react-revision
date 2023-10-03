import React, { useState } from 'react'
import "./productlist.css"
import { productRows } from '../../Dummydata'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const Productlist = () => {

    const[data,setData]=useState(productRows);
    
    const handleDelete =(id)=>{
        setData(data.filter((item)=> item.id !== id ))}
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'product', headerName: 'product', width: 200,renderCell:(params)=>{
          return(
            <div className='productListitem'>
              <img className='productListImg' src={params.row.img} alt=''/>
              {params.row.name}
            </div>
          )
      
        } },
        { field: 'stock', headerName: 'stock', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
      
        {
          field: 'price',
          headerName: 'price',
          width: 120,
        },
      {
          field: 'action',
          headerName: 'Action',
          width: 150,renderCell:(params)=>{
            return(
              <>
              <Link to={"/product/"+params.row.id}>
              <button className='productListEdit'>
                Edit
              </button>
              </Link>
              <DeleteOutline className='productListdelete' onClick={()=>{handleDelete(params.row.id)}} />
              </>
            )
          }
        },
      
      ];
      
  return (
    <div className='productlist'>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

    
    </div>
  )
}

export default Productlist
