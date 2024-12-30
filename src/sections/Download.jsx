import { Element } from "react-scroll";
import { clsx } from "clsx";
import { links } from "/src/constants/index.js";

function Download() {
return (
    <section>
    <Element name="download" className="relative g-7 pb-32 pt-24 max-lg:pb-24 max-md:py-16">
        <div className="container">
            <div className="flex items-center ">
                <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                    <div className="mb-10">
                        <img src="images/xora.svg" width={160} height={55} alt="xora"/>
                    </div>
                    <p className="body-1 mb-10 max-w-md">
                        Try it Now for Free on iOS , Android, PC, Web - whatever your platform we've got you covered 
                    </p>
                    <ul className="flex items-center flex-wrap gap-6">
                        {links.map(({ id, title, icon, url }) => (
                        <li key={id} className="download__tech-link ">
                            {url}
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>
    </Element>
    </section>
);
}

export default Download;
