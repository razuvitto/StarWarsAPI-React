/* Coded with <3 Razuvitto
location : src/CharInfo.jsx
July 2019 */

import React, { Component } from 'react';

class CharInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ expanded: !this.state.expanded })
    }

    close() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const info = this.props.charInfo;

        if (!this.state.expanded) {
            return (
                <div className="container-bg">
                    <p className="btn btn-info" onClick={this.open}>Show Info</p>
                </div>
            )
        }

        return (
            <div className="container-bg">
                <p className="btn btn-danger" onClick={this.close}>Hide info</p>
                <br /><br />
                <ul>
                    <li>
                        <p>
                            <b>Episode ID:</b> {info.episode_id}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Opening Crawl:</b> {info.opening_crawl}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Director:</b> {info.director}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Producer:</b> {info.producer}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Release Date:</b> {info.release_date}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Created at:</b> {info.created}
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Edited at:</b> {info.edited}
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;

// end of file