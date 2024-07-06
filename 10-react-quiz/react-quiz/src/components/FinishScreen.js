function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
    const percentage = (points / maxPossiblePoints) * 100
    
    let emoji
    if(percentage === 100) emoji = '10'
    if(percentage >= 80 && percentage < 100) emoji = '8'
    if(percentage >= 50 && percentage < 80) emoji = '5'
    if(percentage >= 0 && percentage < 50) emoji = '3'
    if(percentage === 0) emoji = '0'
  return (
    <>
        <p className="result">
            <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
        <p className="highscore">(Highscore: {highscore} points)</p>
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'restart' })}>Restart quiz</button>
    </>
  )
}

export default FinishScreen