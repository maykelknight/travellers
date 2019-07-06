import React from 'react';

export default function Tabs (props) {

    const tabsNames = props.tabs.map(tab => tab.name);

    return (
        <>
            <div className="tabs">
                <ul>
                    <li className="is-active"><a>Description</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                </ul>

            </div>
            <div className="">
                <p></p>
            </div>
        </>
    )
}
