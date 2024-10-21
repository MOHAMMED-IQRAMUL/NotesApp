import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromNotes } from "../redux/notes/notesSlice"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Notes = () => {
    const notes = useSelector((state) => state.notes.notes)
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const handleView = (noteId) => {
        navigate(`/Note/${noteId}`)
    }
    const handleEdit = (noteId) => {
        navigate(`/?noteId=${noteId}`)
    }
    const handleDelete = (noteId) => {
        dispatch(removeFromNotes(noteId))
    }
    const handleCopy = (noteContent) => {
        navigator.clipboard.writeText(noteContent)
        toast.success("Copied to Clipboard")
    }
    const handleShare = (noteId) => {
        console.log(noteId)
    }


    return (
        <div className='min-h-[100vh] mb-[100px]'>

            <div className="w-[80%] mx-auto mt-2">
                <h1 className="text-center font-extrabold text-2xl">Your Notes</h1>
                <div className="w-[500px] mx-auto my-5">
                    <input
                        type="text"
                        placeholder="Search Notes"
                        className="border-2 w-full rounded-xl px-3 py-2"
                        value={searchTerm}
                        onFocus={(e) => e.target.style.outline = '2px solid #2563EB'}
                        onBlur={(e) => e.target.style.outline = 'none'}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="notes mx-auto">
                    {filteredNotes.map((note) => (

                        <div key={note._id} className="bg-white p-4 m-4 border border-gray-300   rounded-md ">
                            <div className=" ">
                                <h1 className="font-semibold text-lg">{note.title}</h1>
                                <p className="mt-2">{note.content.slice(0, 100)}
                                    <span className="text-gray-400">.....</span>
                                </p>
                            </div>
                            <div className="flex gap-2 w-full justify-center items-center mt-5">
                                <button onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.background = '#3b82f6'} onClick={() => handleView(note?._id)} className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                    View
                                </button>
                                <button onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.background = '#3b82f6'} onClick={() => handleEdit(note?._id)} className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                    Edit

                                </button>
                                <button onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.background = '#3b82f6'} onClick={() => handleDelete(note?._id)} className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                    Delete
                                </button>
                                <button onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.background = '#3b82f6'} onClick={() => handleCopy(note?.content)} className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                    Copy
                                </button>
                                <button onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                    onMouseLeave={(e) => e.target.style.background = '#3b82f6'} onClick={() => handleShare(note?._id)} className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                    Share
                                </button>

                            </div>

                            <p className="text-center mt-5">Created On:{note.createdAt.slice(0, 10)} At:{note.createdAt.slice(11, 19)}</p>
                        </div>

                    ))}
                </div>


            </div>

        </div>
    )
}

export default Notes
