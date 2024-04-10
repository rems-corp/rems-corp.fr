const switchState = () => {
    const pre = document.querySelector('.pre');
    const mail = document.querySelector('.mail');
    pre.classList.add('hidden');
    mail.classList.toggle('hidden');
}

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-800 text-white h-screen">
            <div className="container mx-auto mt-16 text-center w-7/12 justify-center">
                <h1 className="text-3xl ml-8">Contactez nous</h1>
                <p className="text-base mt-4 ml-28 w-10/12">Sentez-vous libre de nous contacter comme il vous plait. Que vous ayez une question, un avis, ou une proposition de collaboration : nous serons ravis d&apos;entendre ce que vous avez à dire.</p>

                <form className="mt-16 ml-52 w-8/12">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Nom" className="w-full bg-gray-900 p-2 rounded" />
                        <input type="email" placeholder="Email" className="w-full bg-gray-900 p-2 rounded" />
                    </div>
                    <textarea placeholder="Message" className="w-full bg-gray-900 p-2 rounded mt-4 h-40"></textarea>

                    <button className="bg-indigo-700 text-white p-2 px-4 rounded mt-4">Envoyer</button>
                
                </form>

                <hr className="mt-14 ml-96 mr-7 mb-10 w-96" />

                <a onClick={switchState} className="pre ml-16 text-blue-600">Ou cliquez ici pour voir notre adresse email</a>
                <a className="mail hidden ml-16" href="mailto:contact@rems-corp.fr">contact@rems-corp.fr</a>

                <div className="text-center mt-28 ml-12">
                    <p>Rem&apos;s Corp - Entreprise Individuelle</p>
                    <p>SIREN 923902506 - NAF 8299Z</p>
                    <p className="mt-8">© Copyright 2023 Rem&apos;s Corp</p>
                </div>

            </div>
        </section>
    );
}

export default Contact