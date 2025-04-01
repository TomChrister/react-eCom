import { ContactForm } from '../components/form/ContactForm.jsx';
import { useEffect } from 'react';

export function ContactPage () {
    useEffect(() => {
        document.title = 'Contact page';
    })
    return (
        <>
            <ContactForm />
        </>
    )
}