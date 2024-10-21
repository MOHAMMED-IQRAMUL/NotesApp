import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { removeFromNotes } from "../redux/notes/notesSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";



const Note = () => {
  const notes = useSelector((state) => state.notes.notes)
  const { noteId } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [lineNumbers, setLineNumbers] = useState(['1']);

  const note = notes.find((note) => {
    return note._id === noteId
  })

  useEffect(() => {
    const lines = note.content.split('\n').length;
    const newLineNumbers = [];
    for (let i = 1; i <= lines; i++) {
      newLineNumbers.push(i);
    }
    setLineNumbers(newLineNumbers);
  }, [note.content]);

  const handleView = (noteId) => {
    navigate(`/note/${noteId}`)
  }
  const handleEdit = (noteId) => {
    navigate(`/?noteId=${noteId}`)
  }
  const handleDelete = (noteId) => {
    dispatch(removeFromNotes(noteId))
    navigate('/notes')
  }
  const handleCopy = (noteContent) => {
    navigator.clipboard.writeText(noteContent)
    toast.success("Copied to Clipboard")
  }
  const handleShare = (noteId) => {
    console.log(noteId)
  }


  return (
    <div className='min-h-[90vh] flex justify-center items-center mb-[100px]'>

      <div key={note._id} className="bg-white p-4 m-4 border border-gray-300   rounded-md w-[80%] ">
        <div className=" ">
          <h1 className="font-semibold text-5xl text-center mb-5">{note.title}</h1>

          <div className='mt-5 '>
            <div className='w-full h-[30px] px-5  flex justify-between items-center  border border-gray-300 border-b-0 rounded-t-xl'>

              <div className="flex justify-start items-center gap-2">
                <div className="w-[15px] h-[15px] rounded-full bg-red-500"></div>
                <div className="w-[15px] h-[15px] rounded-full bg-yellow-300"></div>
                <div className="w-[15px] h-[15px] rounded-full bg-green-600"></div>
              </div>

              <div className='flex items-center justify-center'>
                <button 
                  onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                  onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
                  onClick={() => handleCopy(note.content)}
                  className='bg-blue-500 text-white px-2   rounded-xl'>Copy</button>
              </div>

            </div>
            <div className='w-full flex'>

              <div className="w-[30px] pr-2  py-2  line-numbers border-2 border-r-0 rounded-bl-xl">
                {lineNumbers.map((number) => (
                  <div key={number} className="text-end line-number">{number}</div>
                ))}
              </div>
              <textarea
                name="content"
                id="content"
                placeholder='Start Typing...'
                value={note.content}
                rows={20}
                disabled
                className='border-2 w-full rounded-br-xl px-3 py-2 border-l-0  resize-none'
              />
            </div>
          </div>



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

        <p className="text-center mt-5">Created On:{note?.createdAt.slice(0, 10)} At:{note.createdAt.slice(11, 19)}</p>
      </div>

    </div>
  )
}

export default Note
