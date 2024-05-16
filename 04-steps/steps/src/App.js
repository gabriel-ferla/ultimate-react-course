import React, { useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return (
    <div>
      <Steps />
    </div>
  )
}

const Steps = () => {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    }
  

  function handleNext() {
    if(step < 3) setStep((s) => s + 1)
  }

  return (
    <div>
      <button className="close" onClick={()=>setIsOpen(is => !is)}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
    
          {/* <p className="message">Step {step}: {messages[step - 1]}</p> */}

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>
    
          <div className="buttons">
            <Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious} >Previous</Button>
            {/* <button style={{backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Previous</button> */}
            {/* <button style={{backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>Next</button> */}
            <Button textColor='#fff' bgColor='#7950f2' onClick={handleNext} >Next</Button>
          </div>
        </div>
        )}
    </div>
  )
}

function StepMessage({step, children}) {
  return (
  <div className='message'>
    <h3>Step {step}</h3>
    {children}
  </div>
  )
}

function Button({textColor, bgColor, onClick, children}) {
  return (
    <button style={{backgroundColor: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  )
}

export default App