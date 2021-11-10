import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres } from '../../actions';
import SideBar from '../SideBar';
import Pagination from '../Pagination';
import DinamicBanner from '../DinamicBanner';
import LoadingPage from '../LoadingPage';
import Filter from '../Filter';
import style from './styles.module.css';
const Home = () => {
    const genres = useSelector(state => state.genres);
    const videogames = useSelector(state => state.videogames);
    const aux = useSelector(state => state.auxVideogames);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getVideogames());
    }, [dispatch])
    return (
        <div className={style.container}>
            {
                aux.length === 0 ?
                    <div className={style.loading}>
                        <div className={style.overlay}>
                            <LoadingPage />
                        </div>
                    </div>
                    : null
            }
            <SideBar title={"Filter By"} width={300} height={"100vh"}>
                <Filter genres={genres} videogames={videogames} />
            </SideBar>
            <div className={style.row}>
                {videogames.length > 0 && <DinamicBanner data={videogames[videogames.length-1]}/>}
                {videogames.length > 0 && <Pagination title={"Games"} data={videogames} />}
            </div>
        </div>
    );
}
export default Home;