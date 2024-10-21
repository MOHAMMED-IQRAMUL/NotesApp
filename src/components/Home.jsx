import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToNotes, updateToNotes } from '../redux/notes/notesSlice'
import toast from 'react-hot-toast'

const Home = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()

    const notes = useSelector((state) => state.notes.notes)
    const noteId = searchParams.get('noteId')
    const note = notes.find((note) => {
        return note._id === noteId
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (noteId) {
            setTitle(note.title)
            setContent(note.content)
        }
    }, [noteId, note])


    const createNotes = () => {

        const note = {
            title: title,
            content: content,
            _id: noteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),

        }

        if (noteId) {
            dispatch(updateToNotes(note))
        } else {
            dispatch(addToNotes(note))
        }

        setTitle('')
        setContent('')
        setSearchParams({})

    }

    const handleCopy = (noteContent) => {
        navigator.clipboard.writeText(noteContent)
        toast.success("Copied to Clipboard")
    }

    const [lineNumbers, setLineNumbers] = useState(['1']);

    useEffect(() => {
        const lines = content.split('\n').length;
        const newLineNumbers = [];
        for (let i = 1; i <= lines; i++) {
            newLineNumbers.push(i);
        }
        setLineNumbers(newLineNumbers);
    }, [content]);


    const index = useRef(0);
    const [contentArray, setContentArray] = useState([content]);


    const Undo = () => {
        if (index.current > 0) {
            index.current = index.current - 1;
            setContent(contentArray[index.current]);
        }
    };

    const Redo = () => {
        if (index.current < contentArray.length - 1) {
            index.current = index.current + 1;
            setContent(contentArray[index.current]);
        }
    };


    return (
        <div className='min-h-[100vh] mb-[100px]'>

            <div className='w-[80%] mx-auto '>

                <h1 className='my-5 text-3xl font-semibold text-center'>Create Notes</h1>

                <div className='flex justify-center items-center gap-3'>

                    <input
                        id="title"
                        type="text"
                        placeholder='Input Title'
                        value={title}
                        onFocus={(e) => e.target.style.outline = '2px solid #2563EB'}
                        onBlur={(e) => e.target.style.outline = 'none'}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 w-full rounded-xl px-3 py-2   '
                    />

                    <button
                        onClick={createNotes}
                        onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                        onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
                        className='bg-blue-500 text-white px-4 py-2 rounded-xl'>
                        {noteId ? 'Update' : 'Add'}
                    </button>

                </div>

                <div className='mt-5 '>
                    <div className='w-full h-[30px] px-5  flex justify-between items-center  border border-gray-300 border-b-0 rounded-t-xl'>

                        <div className="flex justify-start items-center gap-2">
                            <div className="w-[15px] h-[15px] rounded-full bg-red-500"></div>
                            <div className="w-[15px] h-[15px] rounded-full bg-yellow-300"></div>
                            <div className="w-[15px] h-[15px] rounded-full bg-green-600"></div>
                        </div>

                        <div className='flex items-center justify-center gap-3'>

                            <button
                                onClick={Undo}
                                onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
                                className='bg-blue-500 text-white px-2 rounded-xl'>
                                Undo
                            </button>

                            <button
                                onClick={Redo}
                                onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
                                className='bg-blue-500 text-white px-2  rounded-xl'>
                                Redo
                            </button>


                            <button onClick={() => handleCopy(content)}
                                onMouseEnter={(e) => e.target.style.background = '#2563EB'}
                                onMouseLeave={(e) => e.target.style.background = '#3b82f6'} className='bg-blue-500 text-white px-2   rounded-xl'>Copy</button>
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
                            value={content}
                            rows={20}
                            onFocus={(e) => e.target.style.outline = 'none'}
                            onChange={(e) => {
                                setContent(e.target.value)
                                index.current = index.current + 1;
                                setContentArray(
                                    [...contentArray.slice(0, index.current), e.target.value]
                                );
                            }}
                            className='border-2 w-full rounded-br-xl px-3 py-2 border-l-0  resize-none'
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
