import React from "react";

export class Posts extends React.Component {
    state = {
        posts: null 
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState({posts});
        })
    }

    render() {
        const { posts } = this.state;
        return(
            <div>
                <p>Posts</p>
                <div class="row">
                { posts ? (
                    posts.map( post => (
                        <div className="card col-2">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    ))) :
                    (
                        <div>Loading posts...</div>
                    )
                }
                </div>
            </div>
        );
    }


}