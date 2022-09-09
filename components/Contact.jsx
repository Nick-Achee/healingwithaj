import React from 'react'
import { useForm } from '@formspree/react'
import Label from './form/Label'
import Input from './form/Input'
import TextArea from './form/TextArea'
import Form from './form/Form'
import FormButton from './form/FormButton'

const Contact = () => {
    const [state, handleSubmit] = useForm('contact');

    return (
        <section className=" grid -mt-40 z-0 absolute" id="contact">
            <div className="grid">
                {state.succeeded ? (
                    <div className="flex-col w-full max-w-10 md:max-w-screen-sm bg-card dark:bg-card-dark rounded-lg shadow mx-auto p-4 sm:p-8 quick-transition card-pop ">
                        <h2 className="text-center text-gray-dark dark:text-white font-bold">
                            Message sent! We will get back to you ASAP.
                        </h2>
                    </div>
                ) : (

                    <Form id="contact-form"   handleSubmit={handleSubmit}>
                        <h2 className="font-bold text-2xl ml-3 text-gray-dark dark:text-white mx-auto pb-6">Interested in Wholesale Pricing?</h2>
                        <div className="px-3 mb-6">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Smith" errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <Label htmlFor="message">Message</Label>
                            <TextArea id="message" placeholder="Questions about MOQ, current price" errors={state.errors} />
                        </div>
                        <div className="px-3 mb-6">
                            <div className="flex justify-end">
                                <FormButton submitting={state.submitting} />
                            </div>
                        </div>
                    </Form>
                )}
            </div>
        </section>
    )
}

export default Contact