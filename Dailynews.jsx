import React, { useEffect, useMemo, useState } from 'react'

const Dailynews = () => {

    const [data, setdata] = useState([]);
    const [newsdata, setnewsdata] = useState()

    useEffect(() => {
        let api = 'https://newsapi.org/v2/everything?q=Mumbai&from=2025-07-02&sortBy=popularity&apiKey=29df140d1e034677ba59b8b30fd364f4'

        fetch(api).then((resp) => {
            return resp.json();
        }).then((data) => {
            setdata(data.article);
            console.log(data.article)
        })
    }, [])

    const newshandler = (e) => {
        setnewsdata(e.target.value)
    }

    const filternews = useMemo(() => {
        return (data || []).filter((filternews) => {
            return filternews?.toLowearCase().includes(newsdata.toLowearCase())
        })
    }, [data, newsdata])


    return (
        <div>
            <h2>Daily news</h2>
            <input type="text"
                placeholder='Serach news'
                onChange={newshandler}
                value={newsdata}
            />

            {/* {filternews.map((val) => (
                <h4 key={val.url}>{val.title}</h4>
            ))} */}

            {filternews.length === 0 ? (
                <p>No matching news found.</p>
            ) : (
                filternews.map((val) => (
                    <div key={val.url}>
                        <h4>{val.title}</h4>
                        <p>{val.description}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default Dailynews
