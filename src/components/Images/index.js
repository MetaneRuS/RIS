import React from 'react';

class Images extends React.Component {
    render() {
        return (
            this.props.isError === false ?
                <div className="images">
                    {this.props.data.map((item) => {
                        return (
                            <div className="image" key={item.id}>
                                <a href={item.url}>
                                    <img src={item.url} alt="photo_" />
                                </a>
                            </div>
                        )
                    })}
                </div> : <div className="error"><h1>No images</h1></div>
        )
    }
}

export default Images;