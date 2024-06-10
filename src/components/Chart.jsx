import React, { forwardRef, useState } from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from 'react-icons/fc';
import { FaPlayCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { TbMusicSearch } from "react-icons/tb";

import { fetchVideoID } from '../utils/fetchVideoID';


const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
        <FcCalendar size={24} />
        <span>{value}</span>
    </button>
));

const Chart = ({ title, musicList, selectedDate, onDateChange, minDate, maxDate }) => {

    const [searchResultes, setSearchResults] = useState([])

    const handlerItemClick = async (query) => {
        const resultes = await fetchVideoID(query)
        setSearchResults(resultes)
    }

    return (
        <section className='Music-chart'>
            <div className="title">
                <h2>{title}</h2>
                <div className='date'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={onDateChange}
                        dateFormat="yyyy-MM-dd"
                        minDate={minDate}
                        maxDate={maxDate}
                        customInput={<CustomInput />}
                    ></DatePicker>
                </div>
            </div>
            <div className="list">
                <ul>
                    {musicList.map((item, index) => (
                        <li key={index} onClick={() => handlerItemClick(item.title)}>
                            <span className='rank'>#{item.rank}</span>
                            <span className='img' style={{ backgroundImage: `url(${item.imageURL})` }}></span>
                            <span className='title'>{item.title}</span>
                            <span className='album'>{item.album}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {searchResultes.length > 0 && (
                <div className='youtube-result'>
                    <h3><TbMusicSearch />유튜브 검색 결과입니다. 음악을 듣거나 리스트에 추가할 수 있습니다.</h3>
                    <ul>
                        {searchResultes.map((result, index) => (
                            <li key={index}>
                                <span className='img' style={{ backgroundImage: `url(${result.imageURL})` }}></span>
                                <span className='title'>{result.title}</span>
                                <span className='playNow'><FaPlayCircle /></span>
                                <span className='listAdd'><FaList /></span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Chart