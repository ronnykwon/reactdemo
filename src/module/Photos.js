import React from "react";

export class Photos extends React.Component {
    state = {
        photos: null 
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(photos => {
            this.setState({photos});
        })
    }

    render() {
        const { photos } = this.state;
        return(
            <div>
                <div class="row">
                { photos ? (
                    photos.map( photo => (
                        <div className="card col-2">
                            <img className="card-img-top" src={photo.thumbnailUrl}/>
                            <div className="card-body">
                                <h5 className="card-title">{photo.title}</h5>
                            </div>
                        </div>
                    ))) :
                    (
                        <div className="col-12">Loading photos...</div>
                    )
                }
                </div>
            </div>
        );
    }


}