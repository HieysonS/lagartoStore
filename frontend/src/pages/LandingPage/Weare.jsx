import React from 'react';
import logols from '../../Assets/sloganlsr.png'; //

// Shared Tailwind CSS classes
const cardClasses = "bg-background text-primary-foreground p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl";
const titleClasses = "text-4xl font-extrabold mb-6 text-accent text-center";
const subtitleClasses = "text-3xl font-bold mb-3 text-accent";
const textClasses = "text-lg text-muted-foreground";
const buttonClasses = "mt-6 bg-primary text-primary-foreground hover:bg-primary/80 rounded-full py-3 px-6 transition-all text-lg";

const weare = () => {
    return (
        <section className={cardClasses}>
            <h2 className={titleClasses}>LAGARTO STORE</h2>
            <img src={logols} alt="Imagen de Nuestra Empresa" className="w-[50%] mb-6 rounded-lg shadow-md ml-[25%]" />
            <div className="mb-8 ml-[10%]">
                <h3 className={subtitleClasses}>¿Qué Somos?</h3>
                <p className={textClasses}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nostrum praesentium repellat. Ipsam rem quo vitae asperiores autem porro quaerat perspiciatis cumque, error ipsa exercitationem nemo magni laudantium eveniet quos.</p>
            </div>
            <div className="mb-8 ml-[10%]">
                <h3 className={subtitleClasses}>Nuestra Historia</h3>
                <p className={textClasses}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos iure ea, voluptas quisquam, quasi nemo, provident tenetur obcaecati possimus veniam porro velit fuga adipisci? Voluptates voluptatibus nulla impedit a.</p>
            </div>
            <div className="mb-8 ml-[10%]">
                <h3 className={subtitleClasses}>Valores</h3>
                <p className={textClasses}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum, ad iusto similique aliquid delectus? Assumenda maxime itaque a eum aspernatur nostrum molestiae? Saepe ducimus, provident voluptatem aspernatur autem nihil.</p>
            </div>
            <div className="mb-8 ml-[10%]">
                <h3 className={subtitleClasses}>Beneficios</h3>
                <p className={textClasses}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit soluta inventore, accusamus praesentium perspiciatis quas doloremque consequatur mollitia quis non eveniet quo laudantium quibusdam explicabo, iusto distinctio natus, esse quisquam!</p>
            </div>
            <p className="text-lg text-secondary-foreground mb-4 ml-[10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos doloremque voluptatibus hic! Soluta consequuntur voluptatem aliquid illo optio excepturi, ullam omnis molestias saepe ea molestiae praesentium, aspernatur tempora pariatur!.</p>
            
            <div className="flex justify-center">
                <a href="/" className={buttonClasses}>Home</a>
            </div>
        </section>
    );
};

export default weare;
