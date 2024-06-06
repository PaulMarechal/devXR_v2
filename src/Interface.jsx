import { useKeyboardControls } from '@react-three/drei'

export default function Interface(){

  const forward = useKeyboardControls((state) => state.forward )
  const backward = useKeyboardControls((state) => state.backward )
  const leftward = useKeyboardControls((state) => state.leftward )
  const rightward = useKeyboardControls((state) => state.rightward )
  const jump = useKeyboardControls((state) => state.jump )
  
  return <div className="interface">
    
    {/* Time */}
    {/* <div className="time">0.00</div> */}

    {/* Restart */}
    <div className="restart">
      {/* <h1>Bienvenue sur</h1>
      <h2>DevXR.fr</h2>
      <p>Je vous invite a vous déplacer dans la scene et a cliquer sur les elements pour découvrir ce que nous proposons en développement. Du site web classique pour mettre en avant votre entreprise jusqu'aux sites immersifs en réalité augmentée, réalité virtuelle ou encore réalité mixte.</p>
      */}
      <p class="main_title_restart">
        <span >Bienvenue sur </span>
        <br/>
        <span class="name_font">DevXR.fr</span>
      </p>
      <p>Je vous invite a vous déplacer dans la scene et a cliquer sur les elements pour découvrir ce que nous proposons en développement. Du site web classique pour mettre en avant votre entreprise jusqu'aux sites immersifs en réalité augmentée, réalité virtuelle ou encore réalité mixte.</p>

    </div>

    {/* Controls */}
    <div className="controls">
        <div className="raw">
            <div className={` key ${ forward ? 'active' : ''}`}></div>
        </div>
        <div className="raw">
            <div className={` key ${ leftward ? 'active' : ''}`}></div>
            <div className={` key ${ backward ? 'active' : ''}`}></div>
            <div className={` key ${ rightward ? 'active' : ''}`}></div>
        </div>
        <div className="raw">
            <div className={` key large ${ jump ? 'active' : ''}`}></div>
        </div>
    </div>

  </div>
}