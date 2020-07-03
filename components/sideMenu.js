import React from 'react'

const SideMenu = (props) => {
    const {categories} = props
    return (
        <div>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(c =>
                        <a href="#"
                           key={c.id}
                           className="list-group-item">{c.name}</a>
                    )
                }
            </div>
        </div>
    )
}

export default SideMenu