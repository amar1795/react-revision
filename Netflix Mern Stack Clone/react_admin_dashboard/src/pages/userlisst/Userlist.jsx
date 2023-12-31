import React, { useState } from 'react'
import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userRows } from '../../Dummydata';

const Userlist = () => {
  const [data,setData]=useState(userRows);

  const handleDelete =(id)=>{
    setData(data.filter((item)=> item.id !== id ))}

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'username', headerName: 'username', width: 200,renderCell:(params)=>{
    return(
      <div className='userListuser'>
        <img className='userListImg' src={params.row.avatar} alt=''/>
        {params.row.username}
      </div>
    )

  } },
  { field: 'email', headerName: 'email', width: 200 },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
  },

  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 120,
  },
{
    field: 'action',
    headerName: 'Action',
    width: 150,renderCell:(params)=>{
      return(
        <>
        <Link to={"/user/"+params.row.id}>
        <button className='userListEdit'>
          Edit
        </button>
        </Link>
        <DeleteOutline className='userListdelete' onClick={()=>{handleDelete(params.row.id)}} />
        </>
      )
    }
  },

];

  return (
    <div className='user'>
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

export default Userlist
