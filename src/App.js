import React, { Component } from 'react'
import Api from './api'
import logo from './static/ico.png'
import './style.css'

class App extends Component {
	state = {
		posts: [],
		clickatItem: ''
	}

	showPost = id => {
		Api().then(json => {this.setState({clickatItem: json.name})})
	}

	deletePost = (id) => {
		Api(id, "DELETE").then(json => {
			let newArray = this.state.posts.filter(elem => {
				return elem.id !== id ? elem : undefined;
			})
			this.setState({posts: newArray})
		})
	}

	componentDidMount() {
		
		Api().then(json => {
			this.setState({posts: json})
			
		})
	}

	render() {
		return (
		<div>
			<section className="containers">
			<div className="Rectangle">
				<div className="wraper">
					<div className="text">
						<h3 className="heading">Lorem Ipsum is simply dummy</h3>
						<p className="lorem">Lorem Ipsum has been the industry's standard dummy text 
							ever since the 1500s, when an unknown printer took a 
							galley 
						</p>

						<div className="button">
							Read More
						</div>	
					</div>
					<div className="ico">
						<img src={logo} alt={logo} />
					</div>
				</div>			
			</div>
			</section>
			<section className="my-wrapper">
				<form className="my-form">
					<input tupe="text" placeholder="введите имя "/>
					<button type="button" onClick={() => {this.addPosts}}>Add user</button>
				</form>
				<div className="my-list" >
					<ul>{this.state.posts.map(elem => {return <li className="listItem" key={elem.id}>
						<h4 onClick={() => {this.showPost(elem.id)}}>{elem.name}</h4>
						<span onClick={() => {this.deletePost(elem.id)}}>+</span>
						</li>
					})}</ul>
					
				</div>
				
			</section>
		</div>
		)
	}
}

export default App
