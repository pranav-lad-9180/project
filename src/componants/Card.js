import React from 'react'


function Card({ tour }) {
    console.log(tour)
    const title = tour.title
    const content = tour.content
    const large = tour.thumbnail.small
    const name = tour.author.name
    const role = tour.author.role

    function changehandler() {
        console.log("hello image")
    }


    // style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}

    return (
    <div>

        <div className='container'>
            <div className='card'>
                <img src={large} alt="thumbnail large image" />
                <br></br>
                <div className='dotadjust'>
                    <div style={{ backgroundColor: 'aqua' }} className='dotColor'></div>
                    <div style={{ backgroundColor: 'yellow' }} className='dotColor'></div>
                </div>
                <h2 >{title}</h2>
                <p>{content}</p>
                <div className='author'>
                    <div>
                        <p>{name}</p>
                        <p>-</p>
                        <p>{role}</p>
                    </div>

                    <div>
                        <p>Nov 25,2020</p>
                    </div>
                </div>
            </div>







            {/* <button onClick={changehandler}> heklloooafkjshdfs</button> */}
        </div>

    </div>
    )
}

export default Card
