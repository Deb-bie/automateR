import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const Edit = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const contacts = JSON.parse(localStorage.getItem('data'));

    const [name, setName] = useState(location.state.name);
    const [number, setNumber] = useState(location.state.number);
    const [birthday, setBirthday] = useState(location.state.birthday);
    const [wedding, setWedding] = useState(location.state.wedding);
    const [mother, setMother] = useState(location.state.mother);
    const [father, setFather] = useState(location.state.father);

    const x = location.state.id-1;

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


    const handleUpdate = (e) => {
        e.preventDefault();

        let contact={
            name,
            number,
            birthday,
            wedding,
            mother,
            father,
        }

        // setting the key at contacts with an id of x to contact

        contacts[x] = contact

        localStorage.setItem('data',JSON.stringify(contacts))

        navigate('/view')

        setName('');
        setNumber('');
        setBirthday('');
        setWedding('');
        setMother('');
        setFather('');
    }



    return (
        <div className="main">
            <div className='app-wrapper'>
                <div className='header'>
                    <h1>Edit Memo</h1>
                </div>

                <div className="input-container">
                        <form onSubmit={handleUpdate}>
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
                                <input type='submit' value='Edit' className='submit' />
                            </div>
                        </form>
                    </div>

                

            </div>
            
        </div>
    )
}

export default Edit
