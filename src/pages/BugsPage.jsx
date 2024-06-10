import React, { useState } from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';
import { ClipLoader } from 'react-spinners';

const BugsPage = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // 어제 날짜
    const [selectedDate, setSelectedDate] = useState(yesterday);
    const formattedDate = selectedDate.toISOString().split('T')[0]; // 날짜 포맷 형식 맞추기

    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/hyunminkim93/music-best/main/bugs/bugs100_${formattedDate}.json`)

    return (
        <>
            {loading ? (
                <div className='loading'>
                    <ClipLoader size={50} color='#d90bc8' loading={loading} />
                </div>
            ) : (
                <Chart
                    title='벅스 차트 Top 100'
                    musicList={data}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    minDate={new Date('2024-05-01')}
                    maxDate={yesterday}
                />
            )}
        </>
    );
}

export default BugsPage;

