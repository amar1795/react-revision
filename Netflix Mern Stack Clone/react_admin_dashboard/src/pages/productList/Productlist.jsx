import React, { useContext, useEffect, useState } from 'react'
import "./productlist.css"
import { productRows } from '../../Dummydata'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { MovieContext } from '../../context/moviecontext/MovieContext';
import { getMovies } from '../../context/moviecontext/apicalls';

const Productlist = () => {

    const[data,setData]=useState(productRows);
    const {movies,dispatch}=useContext(MovieContext)


        useEffect(()=>{
          getMovies(dispatch)
        },[dispatch])
    
    const handleDelete =(id)=>{
        setData(data.filter((item)=> item.id !== id ))}
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'movie', headerName: 'Movie', width: 200,renderCell:(params)=>{
          return(
            <div className='productListitem'>
              <img className='productListImg' src={params.row.img} alt=''/>
              {params.row.title}
            </div>
          )
      
        } },
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'year', headerName: 'year', width: 150 },
        { field: 'limit', headerName: 'limit', width: 150 },
        { field: 'isSeries', headerName: 'isSeries', width: 150 },
        
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
        rows={movies}
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

export default Productlist
