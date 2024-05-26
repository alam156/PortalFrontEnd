import React, {useState, useEffect, useCallback} from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';
import './css/NotePad.css';
import Navbar from "../Navbar";
import BlackFooter from "../BlackFooter";
import Footer from "../Footer";
import axios from "axios";
import Cookies from "js-cookie";
import note from "./Note";

const NotePad = () => {
    const token = Cookies.get('token');
    const [notes, setNotes] = useState([]);

    const [searchText, setSearchText] = useState('');

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/fetch-notes`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setNotes(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    /*useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);*/

    const addNote = (text) => {
        const date = new Date();
        /*const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };*/
        axios.post(`http://localhost:8085/api/add-note`, {
            text,
            date
        } ,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        /*const newNotes = [...notes, newNote];*/

    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div>
            <div className="navbar-fixed">
                <Navbar/>
            </div>
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-10">
                    <div>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <Header/>
                        <Search handleSearchNote={setSearchText} />
                        <NotesList
                            // notes={notes.filter((note) =>
                            //     note.text.toLowerCase().includes(searchText)
                            // )}
                            notes = {notes}
                            handleAddNote={addNote}
                            // handleDeleteNote={deleteNote}
                        />
                    </div>
                </div>
                <div className="col-md-1">

                </div>
            </div>
            <BlackFooter/>
            <Footer/>

        </div>
    );
};

export default NotePad;