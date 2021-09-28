import './App.css';
import {Component} from "react"
// import Image from './Img'


// export default class App extends Component{
//   state = {
//       count:0
      
//     }
//     handleChange = () => {
//       this.setState({count:this.state.count + 1})
// 	  if (this.state.count === 10){
// 		this.setState({count:this.state.count = 0})
// 	  }
  
//     }
	
  
//   render(){
//     return (
//           <div>
//           <h1>{this.state.count}</h1>
//           <button onClick = {this.handleChange}>change</button>
//           </div>
//           )
//   }

// }

// export default class App extends Component {
// 	state = {
// 	  image: [
// 		{ url: " https://images.unsplash.com/photo-1619038779484-a27362fb82cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" },
// 		{ url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80" },
// 		{ url: "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=596&q=80" },
// 		{ url: "https://images.unsplash.com/photo-1554490828-442467b562dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" },
// 		{ url: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
// 	],
// 	  randomImg:[]
// 	}
// 	getRandom = () => {

// 		let { randomImg, image } = this.state;
	
// 		randomImg = [];
	
// 		randomImg.push(image[Math.floor(Math.random() * image.length)])
	
// 		this.setState({ randomImg });
// 	}
	
// 	render() {
// 		let { randomImg, image } = this.state;
// 		return (
// 		  <div className="container">
// 			{/* <span className="imagesCount"> count: {image.length ? image.length : 0}</span> */}
// 			<button onClick={() => this.getRandom()}> Random </button>
// 		<Image
// 			  image={this.state.image}
// 			  randomImg={randomImg.length && randomImg} />
// 		  </div>
// 		)
// 	}
// }

export default class App extends Component{
	  state = {
	      count:0
		  
	    }
	    handleChange = () => {
	      this.setState({count:this.state.count + 1})
		  if (this.state.count === 10){
			this.setState({count:this.state.count = 0})
		  }
	  
	    }
		
	  
	  render(){
	    return (
	          <div>
	          <h1>{this.state.count}</h1>
	          <button onClick = {this.handleChange}>change</button>
	          </div>
	          )
	  }
	
	}

