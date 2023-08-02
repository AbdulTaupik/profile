import Image from "next/image";

function CardPortopolio(props) {
    const { data } = props;

    const Tags = () => {
        if (data?.tags?.length > 0) {
            return data.tags.map((item, i) => (
                <p
                    key={i}
                    className="px-1 pt-[0.5px] pb-[1px] md:px-2 md:pt-[2px] md:pb-[3px] text-white text-[7px] md:text-[10px] bg-primary rounded-full mr-1 md:mr-2 mb-1"
                >
                    {item}
                </p>
            ));
        }
    };
    return (
        <div className=" object-cover w-full rounded-md text-black mb-4 sm:mb-0">
            <div className="w-full -mb-1.5 image-portofolio">
                <Image
                    src={data.image}
                    alt="hero"
                    className="cursor-pointer"
                    onClick={() => window.open(`https://${data.link}`)}
                />

                <div className="flex flex-wrap mt-1/2 md:mt-2">
                    <Tags />
                </div>
                {/* <p className="text-center text-[10px] sm:text-base mt-1/2 font-semibold opacity-70">
                    {data.title}
                </p> */}
            </div>
        </div>
    );
}

export default CardPortopolio;
