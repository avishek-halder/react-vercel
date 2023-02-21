import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
//import { useQuery } from 'react-query';
import PlanetDesign from '../components/PlanetDesign';

const Planets = () => {

    const fetchPlanets = async (key, page) => {
        console.log(page);
        const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
        return res.json();
        // console.log("fetch");
    }

    const [page, setPage] = useState(1);
    // const { data, status } = useQuery(['planets','hello, ninja',page], fetchPlanets,{
    //     staleTime: 2000,
    // });
    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['planets', page], fetchPlanets);
    // console.log(data);
    // console.log(status);
    return (
        <div>
            <h2>Planets</h2>
            {/* <button onClick={() => setPage(1)}>page 1</button>
                <button onClick={() => setPage(2)}>page 2</button>
                <button onClick={() => setPage(3)}>page 3</button>
                <button onClick={() => setPage(4)}>page 4</button> */}

            {status === 'loading' && (
                <div>
                    <p>Loding..</p>
                </div>
            )}
            {status === 'success' && (
                <>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={ page == 1 ? "page-item disabled" : "page-item" }>
                                <a className="page-link" href="#" tabIndex="-1"  onClick={() => setPage(old => Math.max(old - 1, 1))}>Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                            <li className={!latestData || !latestData.next ? "page-item disabled" : "page-item"}>
                                <a className="page-link" href="#" onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}>Next</a>
                            </li>
                        </ul>
                    </nav>

                    {/* <button onClick={() => setPage(old => Math.max(old - 1, 1))}>Previous Page</button>
                    <span>{page}</span>
                    <button onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}>next page</button> */}
                    <div>
                        {resolvedData.results.map(planet => <PlanetDesign key={planet.name} planet={planet} />)}
                    </div>

                </>
            )}

        </div>
    );
}

export default Planets;

