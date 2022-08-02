import React, { useEffect, useState } from 'react'

import Card from '../Component/Card'

const Kpop = () => {
    const[data , setData] = useState([])
    useEffect(() => {
        fetch(`https://supriya-node.herokuapp.com/api/details`).then(res => res.json())
        .then(res => setData(res))
    }, [])
    
    console.log(data);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Kpop</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Kpop" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                
                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
    )
}
export default Kpop