import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Add.css'
import Select from 'react-select'


const Add = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [wedding, setWedding] = useState('');
    const [mother, setMother] = useState('');
    const [father, setFather] = useState('');

    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };

    const [genderValue, setGenderValue] = useState("");
    const handleGender = (e) => {
        console.log(e.target.value);
        setGenderValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let contact={
            name,
            number,
            birthday,
            wedding,
            mother,
            father,
        }
        setContacts([...contacts, contact]);

        // setting name and number to empty strings after adding their values to contacts
        setName('');
        setNumber('');
        setBirthday('');
        setWedding('');
        setMother('');
        setFather('');
    }

    useEffect(()=>{

        const data = localStorage.getItem('data')
        
        if(data){
          setContacts(JSON.parse(data))
         }
        
    },[])

    // persisting data into local storage
        
    useEffect(()=>{
    
        localStorage.setItem('data',JSON.stringify(contacts))
    
    },[contacts])




    return (
        <div>

            <Navbar />

            <div className="main">
                <div className="app-wrapper">
                    <div className="header">
                        <h1>New Memo</h1>
                    </div>

                    <div className="input-container">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name</label>
                            <br />
                            <input 
                                type='text' name='name' value={name} 
                                required onChange={(e) => setName(e.target.value)} placeholder='Name' aria-label='Name'
                            />
                            <br /><br />

                            <label>Phone Number</label>
                            <br />
                            <input 
                                type='tel' name='number'
                                value={number} required onChange={(e) => setNumber(e.target.value)} placeholder='Phone Number' aria-label='Phone Number'
                            />
                            <br /><br />

                            <label>Birthday</label>
                            <br />
                            <input 
                                type='date' name='birthday' value={birthday} required onChange={(e) => setBirthday(e.target.value)} placeholder='Birthday' aria-label='Birthday'
                            />
                            <br /><br />

                            <label>Gender</label>
                            <br />
                            <select name="selectList" id="selectList" onChange={handleGender}>
                            <option value="" autofocus>Select Gender</option>   
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>

                            <br /><br />

                            <label>Category</label>
                            <br />
                            <select name="selectList" id="selectList" onChange={handleSelect}>
                            <option value="" autofocus>Select Category</option>   
                                <option value="Wife">Wife</option>
                                <option value="Husband">Husband</option>
                                <option value="Mother">Mother</option>
                                <option value="Father">Father</option>
                            </select>

                            {
                                genderValue === "Female" 
                                ? (
                                    <>
                                        <br /><br />
                                        <label>Mother's Day</label>
                                        <br />
                                        <input 
                                            type='date' name='mother\s' value={mother} required
                                            onChange={(e) => setMother(e.target.value)} placeholder='Mother\s Day' aria-label='Mother'
                                        />
                                        <br /><br />
                                    </>
                                ) 
                                : (
                                    <></>
                                )
                            }


                            {
                                genderValue === "Male" 
                                ? (
                                    <>
                                        <br /><br />
                                        <label>Father's Day</label>
                                        <br />
                                        <input 
                                            type='date' name='father\s' value={father} required
                                            onChange={(e) => setFather(e.target.value)} placeholder='Father\s Day' aria-label='Father'
                                        />
                                        <br /><br />
                                    </>
                                ) 
                                : (
                                    <></>
                                )
                            }

                            {
                                optionValue === "Wife" || optionValue === "Husband" || optionValue === "Mother" || optionValue === "Father" || optionValue === "Other"
                                ? (
                                    <>
                                        <label>Wedding Anniversary</label>
                                        <br />
                                        <input 
                                            type='date' name='wedding' value={wedding} required
                                            onChange={(e) => setWedding(e.target.value)} placeholder='Wedding Anniversary' aria-label='Wedding'
                                        />
                                        <br /><br />
                                    </>
                                ) 
                                : (
                                    <></>
                                )
                            }

                            <div className="submit-button">
                                <input type='submit' value='Add' className='submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
