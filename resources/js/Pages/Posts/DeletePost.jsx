import { useForm } from "@inertiajs/react"
import { Button } from "@material-tailwind/react"

export default function Deletepost({type = 'submit', idpost, label, color = 'red', className = ''}) {

    const { data, setData, processing, delete: destroy } = useForm({
          id: idpost
     })

     const submit = (e) => {
          e.preventDefault()

          destroy(route('api.destroy', data.id))
      }

    return (
        <form onSubmit={submit}>
            <Button color={color} type={type} className={className} disabled={processing} onClick={() => confirm('Are you sure?')}>{label}</Button>
        </form>
    )
}
