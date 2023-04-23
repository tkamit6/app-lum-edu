import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Read = () => {

    const [data, setdata] = useState([])

    const getData = () => {
        axios.get("https://643edd976c30feced83574f0.mockapi.io/share-thought")
            .then((res) => {
                // console.log(res.data);
                setdata(res.data);
            });
    }

    useEffect(() => {
        getData();
    }, [])


    const deleteData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#198754',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://643edd976c30feced83574f0.mockapi.io/share-thought/${id}`)
                    .then(() => {
                        getData();
                    }).then((err) => {
                        console.log(err);
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }




    return (
        <div className='container py-5'>
            <table className="table" border='1'>
                <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Your Message</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    data.map((eachdata, index) => {
                        return (
                            <tbody >
                                <tr key={index}>
                                    <th scope="row" >{eachdata.id}</th>
                                    <td>{eachdata.name}</td>
                                    <td>  {eachdata.city}</td>
                                    <td>  {eachdata.msg}</td>
                                    <td><button className='btn btn-danger' data-toggle="tooltip" data-placement="left" title="Delete" onClick={() => deleteData(eachdata.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                    </svg></button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Read