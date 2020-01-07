import React, { Component } from 'react';
import CharInfo from "./CharInfo";

class List extends Component {
    render() {
        const films = this.props.films;

        return(
            <div className="">
                {
                    films.map((p) => {
                        // console.log(p)
                        return (
                                <div className="container-bg" key={p.url}>
                                    <h1 className="char-name">{p.title}</h1>
                                    <CharInfo charInfo={p}/>
                                </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;