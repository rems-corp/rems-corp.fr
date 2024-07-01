import { FormattedMessage, useIntl } from "react-intl";

const Contact = () => {
    const intl = useIntl();

    return (
        <section id="contact" className="py-16 bg-gray-800 text-white h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-2 xl:mb-5"><FormattedMessage id="contact.title" /></h1>
                <p className="text-base md:w-8/12 md:mb-6 xl:w-6/12 ml-4 md:ml-0 xl:ml-0 mb-4 xl:mb-10"><FormattedMessage id="contact.desc" /></p>

                <form className="flex flex-col">                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 xl:mb-8">
                        <input type="text" placeholder={intl.formatMessage({id: "contact.form.name"})} className="w-full bg-gray-900 p-2 rounded" />
                        <input type="email" placeholder={intl.formatMessage({id: "contact.form.email"})} className="w-full bg-gray-900 p-2 rounded" />
                    </div>
                    <textarea placeholder={intl.formatMessage({id: "contact.form.subject"})} className="w-full bg-gray-900 p-2 rounded h-20 xl:h-40"></textarea>

                    <button className="bg-indigo-700 text-white p-2 px-4 rounded mt-6"><FormattedMessage id="contact.form.submit"/></button>
                </form>

                <hr className="hidden md:block xl:block w-96 my-6" />

                <a className="mail pre" href="mailto:contact@rems-corp.fr">contact@rems-corp.fr</a>

                <div className="text-center mt-10">
                    <p>Rem's Corp - Entreprise Individuelle</p>
                    <p>SIREN 923902506 - NAF 8299Z</p>
                    <p className="">© Copyright 2023 Rem's Corp</p>
                </div>

            </div>
        </section>
    );
}

export default Contact