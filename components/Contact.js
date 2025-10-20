import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Contact = ({ isMobile }) => {
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
        <section id="contact" className="pt-40 pb-10 bg-primary/60 text-white min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center px-2 sm:px-4">
                <h1 className="text-2xl sm:text-3xl mb-2 xl:mb-5 text-center">
                    <FormattedMessage id="contact.title" />
                </h1>
                <p className="text-sm sm:text-base md:w-10/12 xl:w-6/12 mb-4 xl:mb-10 text-center mx-auto">
                    <FormattedMessage id="contact.desc" />
                </p>

                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col w-full max-w-[90vw] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] mx-auto"
                >                
                    <div className="gap-4 mb-4 xl:mb-8">
                        <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder={t({id: "contact.form.email"})} 
                            className="w-full bg-gray-900 p-2 rounded text-sm sm:text-base"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder={t({id: "contact.form.subject"})} 
                        className="w-full bg-gray-900 p-2 rounded h-20 sm:h-28 xl:h-40 text-sm sm:text-base"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    
                    <button 
                        type="submit" 
                        disabled={state.submitting} 
                        className="bg-indigo-700 text-white p-2 px-4 rounded mt-6 text-sm sm:text-base"
                    >
                        <FormattedMessage id="contact.form.submit"/>
                    </button>
                </form>

                {showSuccess && (
                    <div className="fixed top-6 right-2 sm:right-6 z-50 mt-0 p-2 bg-green-600 text-white rounded text-center shadow-lg transition-all duration-300 text-xs sm:text-base">
                        <FormattedMessage id="contact.form.success"/>
                    </div>
                )}

                <hr className="md:block xl:block w-11/12 md:w-96 my-6" />

                {/* <a className="mail pre break-all text-xs sm:text-base" href="mailto:contact@rems-corp.fr"> */}
                <span>
                    contact@rems-corp.fr
                </span>
                {/* </a> */}


                <div className="text-center mt-auto mb-4 text-xs sm:text-sm">
                    <p>Rem&apos;s Corp - Entreprise Individuelle</p>
                    <p>SIREN 923902506 - NAF 8299Z</p>
                    <p>© Copyright 2023 Rem&apos;s Corp</p>
                    {isMobile && <div><br /><br /></div>}
                </div>
            </div>
        </section>
    );
}

export default Contact