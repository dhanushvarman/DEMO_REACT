import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { config } from './config';

function ViewUser() {

    const[data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try {
                const users = await axios.get(`${config.api}/read`);
                setData(users.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    },[]);

    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Age</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">District</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index)=>{
                            return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td>{user.pincode}</td>
                            <td>{user.district}</td>
                            <td>
                                <Link to={`/main-page/update/${user._id}`} className='btn btn-warning btn-sm mr-2'>Update</Link>
                                <button className='btn btn-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewUser