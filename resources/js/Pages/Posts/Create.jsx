import InputLabel from "@/Components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect } from "react";

export default function Create({ auth, title }) {
     const { data, setData, processing, post } = useForm({
          id: auth.user.id,
          title: '',
          content: ''
     })

     const submit = (e) => {
          e.preventDefault()

          post(route('api.create'))
      }

     return (
          <AuthenticatedLayout
               user={auth.user}
               header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
          >
               <Head title={title} />

               <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                         <div className="bg-white p-5 overflow-hidden shadow-sm sm:rounded-lg">
                              <form onSubmit={submit}>
                                   {/* <Input type="text" name="id" value={auth.user.id} onChange={ (e) => setData('id', e.target.value)} autoFocus /> */}
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
                    </div>
               </div>
          </AuthenticatedLayout>
     )
}
