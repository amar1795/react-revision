import React, { useContext, useEffect, useState } from 'react'
import "./lists.css"
import { productRows } from '../../Dummydata'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { ListContext } from '../../context/listcontext/ListContext';
import {  deleteLists, getLists } from '../../context/listcontext/apicalls';

const List = () => {

    const[data,setData]=useState(productRows);
    const {lists,dispatch}=useContext(ListContext)


        useEffect(()=>{
          getLists(dispatch)
        },[dispatch])
    
    const handleDelete =(id)=>{
      deleteLists(id,dispatch)
    }    
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'title', headerName: 'title', width: 150 },
        { field: 'type', headerName: 'type', width: 150 },
        
      {
          field: 'action',
          headerName: 'Action',
          width: 150,renderCell:(params)=>{
            console.log("this is params "+params.row._id)
          
            
            return(
              <>
              {/* *************************this is the syntax for passing state in Link in react 6******************************************************* */}
            <Link to= {`/list/ ${params.row._id}`} state= {{list: params.row}} >
                
              <button className='productListEdit'>
                Edit
              </button>
              </Link>
              <DeleteOutline className='productListdelete' onClick={()=>{handleDelete(params.row._id)}} />
              </>
            )
          }
        },
      
      ];
      
  return (
    <div className='productlist'>
      <DataGrid
        rows={lists}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={r=>r._id}
      />

    
    </div>
  )
}

export default List
