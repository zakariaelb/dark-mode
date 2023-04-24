import React from "react"
import boxes from "./boxes"
import "./App.css"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }

    // function toggle(id){
    //      setSquares(prevSauares => {
            //  const newSquares = []
            //  for(let i = 0; i < prevSauares.length; i++) {
            //      const currentSquares = prevSauares[i]
            //      if(currentSquares.id === id){
            //          const updatedSquares = {
            //              ...currentSquares, 
            //              on: !currentSquares.on
            //          }
            //          newSquares.push(updatedSquares)
            //      } else {
            //          newSquares.push(currentSquares)
            //      }
            //  }
            //  return newSquares
    //      })
    //  }

     //Do this instead //

     function toggle(id){
        setSquares(prevSauares => {
            return prevSauares.map((square) => {
               return square.id === id ? {...square, on: !square.on} : square

            })

        })
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
