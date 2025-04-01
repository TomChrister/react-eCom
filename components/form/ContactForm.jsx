import { useForm } from 'react-hook-form'

export function ContactForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <>
            <form
                action=""
                className="flex flex-col gap-2 mx-auto max-w-lg my-5 p-6 bg-white rounded-lg shadow-lg"
                onSubmit={handleSubmit((data) => { console.log(data); })} noValidate
            >
                <label htmlFor="name" className="text-lg font-semibold">Full name</label>
                <input
                    id="name"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long',
                        },
                    })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <label htmlFor="email" className="text-lg font-semibold">Email</label>
                <input
                    id="email"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /noroff\.no/,
                            message: 'Please enter a valid email with @noroff.no',
                        },
                    })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <label htmlFor="subject" className="text-lg font-semibold">Subject</label>
                <input
                    id="subject"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    {...register('subject', {
                        required: 'Subject is required',
                        minLength: {
                            value: 3,
                            message: 'Subject must be at least 3 characters long',
                        },
                    })}
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

                <label htmlFor="message" className="text-lg font-semibold">Message</label>
                <textarea
                    id="message"
                    className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    {...register('message', {
                        required: 'Message is required',
                        minLength: {
                            value: 3,
                            message: 'Message must be at least 3 characters long',
                        },
                    })}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                <button className="border bg-green-700 text-white rounded-sm p-2 cursor-pointer hover:bg-green-800 focus:ring-2 focus:ring-green-500 transition-colors">
                    Submit
                </button>
            </form>
        </>
    )
}