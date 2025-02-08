import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ref from './useref/Ref.jsx'
// import External from './styles/External'
// import './index.css'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'
// import "../src/styles/globally.css"
// import Comp2 from './styles/Comp2.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import Inline from './styles/Inline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <Inline/> */}
  {/* <Comp1/>
  <Comp2/>*/}
  {/* <External/> */}
  <Ref/>
   
    
  </StrictMode>,
)
