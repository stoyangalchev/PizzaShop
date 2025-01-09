import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import instance from '../axios';
import useAuth from '../hooks/useAuth';
import useLogout from './adminHooks/useLogout';
import useFetchPizzas from './adminHooks/useFetchPizzas'; // Import the custom hook

const AdminDashboard = () => {
    const loading = useAuth();
    const logout = useLogout();
    const { pizzas, setPizzas, fetchPizzas, error } = useFetchPizzas(); // Use the custom hook
    const [newPizza, setNewPizza] = useState({ name: '', price: '', category: '', image: '', description: '' });
    const [editPizza, setEditPizza] = useState(null);
    const [addError, setAddError] = useState('');
    const [fileName, setFileName] = useState(''); // State to keep track of the file name
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchPizzas();
    }, []);
  

    const handleEditPizza = async (e) => {
        e.preventDefault();
        try {
            const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
            const token = adminInfo ? adminInfo.token : null;
            if (!token) {
                throw new Error('No token found');
            }

            console.log('Editing pizza:', editPizza); // Debugging

            const response = await instance.put(`/pizzas/editpizzas/${editPizza._id}`, editPizza, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data && Object.keys(response.data).length > 0) {
                setPizzas(pizzas.map(pizza => pizza._id === editPizza._id ? response.data : pizza));
            } else {
                console.error('Response data is empty or invalid');
            }

            setEditPizza(null);
            setFileName('');
            fileInputRef.current.value = ''
            setAddError('');
        } catch (error) {
            console.error('Failed to edit pizza:', error);
            setAddError('Failed to edit pizza');
        }
    };

    const handleDeletePizza = async (_id) => {
        try {
            const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
            const token = adminInfo ? adminInfo.token : null;
            if (!token) {
                throw new Error('No token found');
            }

            const response = await instance.delete(`/pizzas/deletepizzas/${_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setPizzas(pizzas.filter(pizza => pizza._id !== _id));
            } else {
                console.error('Failed to delete pizza');
            }
        } catch (error) {
            console.error('Failed to delete pizza:', error);
            setAddError('Failed to delete pizza');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file.name); // Set the file name
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            console.log('Base64 String:', base64String); // Debugging
            setNewPizza({ ...newPizza, image: base64String });
            e.target.value = '';
            fileInputRef.current.value = '';
            setFileName("") // Reset the file input value
        };
        reader.readAsDataURL(file);
    };

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            setEditPizza(null);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-dashboard">

            <h2>Admin Dashboard</h2>

            <div className='divAdminDashboard'>
                <Link to="/admin/dashboard/addpizza">
                    <button className="add-pizza-button">Add New Pizza</button>
                </Link>
                <button onClick={logout} className="logout-button">Logout</button>
            </div>

            {editPizza && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <h3>Edit Pizza</h3>
                        <form onSubmit={handleEditPizza}>
                            <input
                                type="text"
                                placeholder="Pizza Name"
                                value={editPizza.name}
                                onChange={(e) => setEditPizza({ ...editPizza, name: e.target.value })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Pizza price"
                                value={editPizza.price}
                                onChange={(e) => setEditPizza({ ...editPizza, price: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                value={editPizza.category}
                                onChange={(e) => setEditPizza({ ...editPizza, category: e.target.value })}
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
                            />
                            {fileName && <p className="file-name">{fileName}</p>} {/* Display the file name */}
                            <textarea
                                placeholder="Description"
                                value={editPizza.description}
                                onChange={(e) => setEditPizza({ ...editPizza, description: e.target.value })}
                                required
                            />
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                </div>
            )}
            <div className="pizza-list">
                <h3>Pizza List</h3>
                {pizzas && pizzas.length > 0 ? (
                    <ul>
                        {pizzas.map(pizza => (
                            <li key={pizza._id}>
                                <div className='textContainer'>
                                    <div className='imgPizza'> <img src={pizza.image} alt={pizza.name} /></div>
                                    <h4><span>Name:</span> {pizza.name}</h4>
                                    <p><span>Price:</span> {pizza.price}$</p>
                                    <p><span>Category:</span> {pizza.category}</p>
                                    <p><span>Description:</span> {pizza.description}</p>

                                </div>
                                <div className='btnContainer'>
                                    <button className='btnEdit' onClick={() => setEditPizza(pizza)}>Edit</button>
                                    <button className='btnDelete' onClick={() => handleDeletePizza(pizza._id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No pizzas available.</p>
                )}
            </div>
            {error && <p className="error">{error}</p>}
            {addError && <p className="error">{addError}</p>}
        </div >
    );
};

export default AdminDashboard;