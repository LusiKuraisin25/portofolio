import Modal from "@/Components/Modal";
import { Head, useForm } from "@inertiajs/react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function Edit({ auth, post }) {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

     const { data, setData, processing, patch } = useForm({
          id: auth.user.id,
          title: post.title,
          content: post.content
     })

     const submit = (e) => {
          e.preventDefault()

          patch(route('api.update', post.id))
      }

     return (
        <>
            <Button onClick={openModal}>Edit</Button>
            <Modal show={open}>
                <div className="p-6">
                    <h1 className="font-medium text-2xl text-gray-800 pb-3">Edit Post</h1>
                        <form onSubmit={submit}>
                            <Input
                                variant="standard"
                                id="title"
                                name="title"
                                label="Title"
                                value={data.title}
                                onChange={ (e) => setData('title', e.target.value)}
                                required
                                />
                            <br />
                            <Textarea
                                label="Content"
                                id="content"
                                name="content"
                                value={data.content}
                                onChange={ (e) => setData('content', e.target.value)}
                                required
                                />
                            <Button type="submit" disabled={processing}>Submit</Button>
                        </form>
                </div>
            </Modal>
        </>
     )
}
