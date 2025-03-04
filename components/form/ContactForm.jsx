import { useForm } from 'react-hook-form'

export function ContactForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <>
            <form action='' className='flex flex-col gap-1 mx-auto max-w-md' onSubmit={handleSubmit((data) => {console.log(data);})}>
                <label htmlFor=''>Full name</label>
                <input className='border rounded-sm' type='text'
                       {...register('name', {
                           required: true,
                           minLength: {
                               value: 3,
                               message: 'Name is required'
                           },
                       })}
                />
                {errors.name &&
                    (errors.name.message ? (
                        <p className='text-red-500'>{errors.name.message}</p>
                    ) : (
                        <p className='text-red-500'>Error</p>
                    ))}

                <label htmlFor=''>Email</label>
                <input className='border rounded-sm' type='text'
                       {...register('email', {
                           required: true,
                           pattern: {
                               value: /noroff\.no/,
                               message: 'Please enter a email with @noroff.no',
                           },
                       })}
                />
                {errors.email &&
                    (errors.email.message ? (
                        <p className='text-red-500'>{errors.email.message}</p>
                    ) : (
                        <p className='text-red-500'>Unexpected error</p>
                    ))}

                <label htmlFor=''>Subject</label>
                <input className='border rounded-sm'
                       type='text'
                       {...register('subject', {
                           required: true,
                           minLength: {
                               value: 3,
                               message: 'Must be at least 3 characters',
                           },

                       })}
                />
                {errors.subject &&
                    (errors.subject.message ? (
                        <p className='text-red-500'>{errors.subject.message}</p>
                    ) : (
                        <p className='text-red-500'>Error</p>
                    ))}

                <label htmlFor=''>Message</label>
                <input className='border rounded-sm'
                       type='text'
                       {...register('message', {
                           required: true,
                           minLength: {
                               value: 3,
                               message: 'Message must be at least 3 characters',
                           },
                       })}
                />
                {errors.message &&
                    (errors.message.message ? (
                        <p className='text-red-500'>{errors.message.message}</p>
                    ) : (
                        <p className='text-red-500'>Error</p>
                    ))}

                <button className='border bg-green-500 text-white rounded-sm p-2 cursor-pointer'>Submit</button>
            </form>
        </>
    )
}