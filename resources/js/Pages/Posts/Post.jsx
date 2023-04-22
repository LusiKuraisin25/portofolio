import Loading from '@/Components/Loading';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import { Button } from '@material-tailwind/react';
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Post({ auth, title, message }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/karyawan')
        setData(response.data)
        setLoading(false)
    }

    let i = 1

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Post</h2>}
        >
            <Head title={title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-5 overflow-hidden shadow-sm sm:rounded-lg">

                        { loading
                        ? ( <Loading className="m-auto" /> )
                        : (
                        <>
                            <div>
                                <Link href={route('post.create')}>
                                    <Button>+ Add New Post</Button>
                                </Link>
                                {message && (<div className='w-full rounded-lg bg-green-500 p-5 text-white font-medium text-xl'>
                                    {message}
                                </div>)}
                            </div>
                            <table className='w-full'>
                                    <thead>
                                        <tr className='border-b-2 border-black'>
                                            <th className='p-2'>No.</th>
                                            <th className='p-2'>Author</th>
                                            <th className='p-2'>Title</th>
                                            <th className='p-2'>Content</th>
                                            <th className='p-2'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(d => (
                                            <tr className='border-b border-gray-500/50' key={i}>
                                                <td className='p-2'>{i++}.</td>
                                                <td className='p-2'>{d.nama}</td>
                                                {/* <td className='p-2'>{d.title}</td>
                                                <td className='p-2'>{d.content}</td>
                                                <td className='p-2'>
                                                    <Deletepost idpost={d.id} label='Delete' />
                                                    <Edit auth={auth} post={d} />
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
