import React, { useEffect, useState } from 'react';
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from '@mui/x-data-grid';
 
import Navbar from '../../components/Navbar/Navbar';
import { DeleteOutline, EditOutlined, PageviewOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import './View.css'



const View = () => {

  const navigate = useNavigate();

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('data')));

  console.log(contacts.length)
  
  const handleEdit = async(id, name, number, birthday) => {
      navigate("/view/" + id, {
        state: {
          id: id,
          name: name,
          number: number,
          birthday: birthday,
        }
      })
  }


  const handleView = async(id, name, number, birthday) => {
    navigate("/reminders/" + id, {
      state: {
        id: id,
        name: name,
        number: number,
        birthday: birthday,
      }
    })
}


    const handleDelete = (number) => {

      const filtered = contacts.filter((element, index) => {
        return element.number !== number
      })

      setContacts(filtered)

    }

    useEffect(()=>{
    
      localStorage.setItem('data',JSON.stringify(contacts))
      
    },[contacts])



    const columns = [
        {
          field: "id",
          headerName: "ID",
          width: 80,
        },
    
        {
          field: "name",
          headerName: "Name",
          width: 200,
          renderCell: (cellValues) => {
            return (
              <div
                style={{
                  color: "blue",
                  fontSize: 18,
                  width: "100%",
                  textAlign: "left"
                }}
              >
                {cellValues.value}
              </div>
            );
          }
        },
    
        {
          field: "phoneNumber",
          headerName: "Phone Number",
          width: 200,
        },

        {
          field: "birthday",
          headerName: "Birthday",
          width: 200,
        },

        {
          field: "details",
          headerName: "Details",
          width: 120,

          renderCell: (params) => {
            return (
                <PageviewOutlined style={{color: "blue"}}
                onClick={() => 
                  handleView(
                    params.row.id, 
                    params.row.name,
                    params.row.phoneNumber,
                    params.row.birthday,
                )}
                
                />
            );
          },
        },

        {
          field: "edit",
          headerName: "Edit",
          width: 120,
          renderCell: (params) => {
            return (
                <EditOutlined style={{color: "green"}}
                onClick={() => 
                  handleEdit(
                    params.row.id, 
                    params.row.name,
                    params.row.phoneNumber,
                    params.row.birthday,
                )}
                
                />
            );
          },
        },
    
    
        {
          field: "delete",
          headerName: "Delete",
          width: 120,
          renderCell: (params) => {
            return (
              <DeleteOutline style={{color: "red"}}
                onClick={() => handleDelete(params.row.phoneNumber)}
              />
            );
          },
        },
    
    ];


    const rows = contacts.map((contact, index) =>(
        {
          key: index,
            id: index+1,
            name: contact.name,
            phoneNumber:  contact.number,
            birthday: contact.birthday,
            edit: index+1,
            delete: contact
        }
    ))
    


    return (
        <div>
            <Navbar />

            <div className="mains">
              <div className="wrapper">
                <div className="data-styles">
                  {contacts.length > 0 && (
                    <DataGrid 
                    rowHeight={70}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    />
                  )}

                  {contacts.length < 1 && (
                    <p style={{alignItems: "center", justifyContent: "center", display: "flex", marginTop: "100px"}}
                    >There are no contacts yet, please click  &nbsp;
                      <Link to='/add'>here</Link> 
                      &nbsp; to add contacts</p>
                  )}
                </div>
              </div>
            </div>          
            
        </div>
    )
}


export default View
