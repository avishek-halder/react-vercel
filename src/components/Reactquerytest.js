import React, { Component, useEffect, useState } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import People from './People';

const Reactquerytest = () => {
    const [fdata, setdata] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        // await fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => {
        //         response.json();
        //         setdata(response.json())

        //     })
        //     .then((data) => {
        //         console.log(data)
        //     })
        //     .catch((err) => {
        //         console.log(err)

        //     });

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        setdata(await response.json());
        // console.log(response.json())
    }

    // const listItems = fdata.map((number) =>
    //   <li>{number}</li>
    // );

    return (
        <>
            <div className=''>
                <h1>This is React query test.</h1>
                {fdata && (
                    <div>
                        <h1>This is Data.</h1>
                        <ul>
                            {/* {listItems} */}
                            {fdata.map((d,index) => (
                                <li key={index}>{d.title}</li>
                            ))}
                        </ul>
                    </div>

                )}

                {!fdata && (
                    <div>
                        <h1>Loding..........</h1>
                    </div>
                )}
            </div>
        </>
    )
}

export default Reactquerytest;