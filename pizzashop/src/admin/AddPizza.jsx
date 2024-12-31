import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../axios';

const AddPizza = () => {
    const [newPizza, setNewPizza] = useState({ name: '', price: '', category: '', image: '', description: '' });
    const [addError, setAddError] = useState('');
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleAddPizza = async (e) => {
        e.preventDefault();
        try {
            const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
            const token = adminInfo ? adminInfo.token : null;
            if (!token) {
                throw new Error('No token found');
            }

            console.log('Adding pizza:', newPizza);

            const response = await instance.post('/pizzas/addpizzas', newPizza, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data && Object.keys(response.data).length > 0) {
                navigate('/admin/dashboard');
                console.log(response.data);
            } else {
                console.error('Response data is empty or invalid');
            }

            setNewPizza({ name: '', price: '', category: '', image: '', description: '' });
            setFileName('');
            fileInputRef.current.value = '';
            setAddError('');
        } catch (error) {
            console.error('Failed to add pizza:', error);
            setAddError('Failed to add pizza');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file.name); // Set the file name
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            console.log('Base64 String:', base64String); // Debugging
            setNewPizza(prevState => ({ ...prevState, image: base64String }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="admin-dashboard">
            <div className="add-pizza">
                <h3>Add New Pizza</h3>
                <form onSubmit={handleAddPizza}>
                    <input
                        type="text"
                        placeholder="Pizza Name"
                        value={newPizza.name}
                        onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Pizza price"
                        value={newPizza.price}
                        onChange={(e) => setNewPizza({ ...newPizza, price: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={newPizza.category}
                        onChange={(e) => setNewPizza({ ...newPizza, category: e.target.value })}
                        required
                    />
                    <div className="customsa-file-input" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                        Choose File
                    </div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        required
                    />
                    {fileName && <p className="file-name">{fileName}</p>} {/* Display the file name */}
                    <textarea
                        placeholder="Description"
                        value={newPizza.description}
                        onChange={(e) => setNewPizza({ ...newPizza, description: e.target.value })}
                        required
                    />
                    <button type="submit">Add Pizza</button>
                </form>
                {addError && <p className="error">{addError}</p>}
            </div>
        </div>
    );
};

export default AddPizza;