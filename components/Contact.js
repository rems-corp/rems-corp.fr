import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Contact = () => {
    const intl = useIntl();
    const t = intl.formatMessage;

    const [ state, handleSubmit ] = useForm("meokkqeg");
    const [ showSuccess, setShowSuccess ] = useState(false);
    
    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <section id="contact" className="py-16 bg-primary/60 text-white h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-2 xl:mb-5"><FormattedMessage id="contact.title" /></h1>
                <p className="text-base md:w-8/12 md:mb-6 xl:w-6/12 ml-4 md:ml-0 xl:ml-0 mb-4 xl:mb-10"><FormattedMessage id="contact.desc" /></p>

                <form onSubmit={handleSubmit} className="flex flex-col w-[450px]">                
                    <div className="gap-4 mb-4 xl:mb-8">
                        <input id="email" type="email" name="email" placeholder={t({id: "contact.form.email"})} className="w-full bg-gray-900 p-2 rounded" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <textarea id="message" name="message" placeholder={t({id: "contact.form.subject"})} className="w-full bg-gray-900 p-2 rounded h-20 xl:h-40" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    
                    <button type="submit" disabled={state.submitting} className="bg-indigo-700 text-white p-2 px-4 rounded mt-6">
                        <FormattedMessage id="contact.form.submit"/>
                    </button>
                </form>

                {showSuccess && (
                    <div className="fixed top-6 right-6 z-50 mt-0 p-2 bg-green-600 text-white rounded text-center shadow-lg transition-all duration-300">
                        <FormattedMessage id="contact.form.success"/>
                    </div>
                )}

                <hr className="hidden md:block xl:block w-96 my-6" />

                <a className="mail pre" href="mailto:contact@rems-corp.fr">contact@rems-corp.fr</a>

                <div className="text-center mt-auto mb-4">
                    <p>Rem's Corp - Entreprise Individuelle</p>
                    <p>SIREN 923902506 - NAF 8299Z</p>
                    <p>© Copyright 2023 Rem's Corp</p>
                </div>
            </div>
        </section>
    );
}

export default Contact