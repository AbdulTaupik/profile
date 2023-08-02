function CardResume(props) {
    const { heading, data } = props;
    return (
        <div className="flex flex-col">
            <div className="text-lg sm:text-2xl font-black mb-5 text-black -ml-2">
                {heading}
            </div>
            {data?.map((item, i) => (
                <div key={i} className="flex ">
                    <div
                        className="absolute w-4 h-4 bg-white border-primary  border-2 rounded-full "
                        style={{ marginLeft: -7, marginTop: 0 }}
                    ></div>
                    <div className="w-full border-l-2 pl-5 border-primary">
                        <p className="text-primary text-base sm:text-xl font-bold -mt-1">
                            {item.title}
                        </p>
                        {item?.date ? (
                            <p className=" py-1 mt-1 text-sm sm:text-base">
                                {item.date}
                            </p>
                        ) : null}
                        <p className="text-sm sm:text-base italic mt-1">
                            {item.address}
                        </p>
                        <p className="text-sm sm:text-base mt-1">
                            {item.major}
                        </p>
                        <p className="text-sm sm:text-base mt-1">
                            {item.description}
                        </p>
                        {item?.information ? (
                            <>
                                {item.information.map((information, inf) => (
                                    <div key={inf} className="flex">
                                        <p className="w-28 text-sm sm:text-base">
                                            {information.items.label}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            {": " + information.items.value}
                                        </p>
                                    </div>
                                ))}
                            </>
                        ) : null}
                        {item?.items?.length !== 0 &&
                        item?.items != undefined ? (
                            <ul
                                style={{
                                    listStyleType:
                                        item?.items?.length > 1
                                            ? "desc"
                                            : "decimal",
                                }}
                            >
                                <div className="pl-5 mt-3 text-sm sm:text-base">
                                    {item?.items?.map((client, j) => (
                                        <div key={j} className="mt-1 mb-3">
                                            {client?.nameProject ? (
                                                <li>
                                                    {client?.nameProject}
                                                    {client?.jobs?.map(
                                                        (value, k) => {
                                                            return (
                                                                <ul
                                                                    key={k}
                                                                    style={{
                                                                        listStyleType:
                                                                            "disc",
                                                                    }}
                                                                >
                                                                    <li className="ml-5 mt-2">
                                                                        {value}
                                                                    </li>
                                                                </ul>
                                                            );
                                                        }
                                                    )}
                                                </li>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            </ul>
                        ) : null}
                        {data?.length - 1 !== i ? (
                            <div className="h-6" />
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardResume;
