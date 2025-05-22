import React, {use, useEffect, useState} from 'react'

const Csr = () => {
    const [data, setData] = useState({});

    const getUser = async () => {
        const response = await fetch('https://randomuser.me/api/?nat=us&randomapi');

        const data = await response.json();

        // console.log(data);
        setData(data.results);
    }

    useEffect(() => {
        getUser();
    }, []);

    console.log(data);

    return (
        <div>
            Hello, {data?.name?.title} {data?.name?.last} {data?.name?.first}
        </div>
    )
}

export default Csr