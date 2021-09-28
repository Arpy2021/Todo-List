import React from 'react'

export default function Image(props) {
	const myFunction = (options) => { 
		return (
			options.map(elem => {
				return(
					<img src={elem.url}/>
            )
					

			})
		)
	 }
	 
     const rendering = () => { 
        return  props.randomImg.length > 0 
                            ? myFunction(props.randomImg)
                            : myFunction(props.image)
     }
       return (
           <div className="flex">
                   {rendering()}
           </div>
       )
   }