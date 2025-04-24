const HEAD = (
    <div style={{
        height:'50px',
        width:'50px',
        borderRadius:'100%',
        border: '10px solid black',
        position:'absolute',
        top:'50px',
        right:'-30px'
    }}/>
)
const BODY= (
    <div style={{
        height:'100px',
        width:'10px',
        
        background:'black',
        position:'absolute',
        top:'115px',
        right:'-3px'
    }}/>
)

const LEFT_ARM=(
    <div style={{
        height:'10px',
        width:'100px',
        background:'black',
        position:'absolute',
        top:'140px',
        right:'6px',
        rotate:'30deg',
        transformOrigin:'right bottom'


    }}/>

)
const RIGHT_ARM=(
    <div style={{
        height:'10px',
        width:'100px',
        background:'black',
        position:'absolute',
        top:'140px',
        right:'-104px',
        rotate:'-30deg',
        transformOrigin:'Left bottom'


    }}/>

)
const LEFT_LEG=(
    <div style={{
        height:'10px',
        width:'100px',
        background:'black',
        position:'absolute',
        top:'204px',
        right:'-3px',
        rotate:'-60deg',
        transformOrigin:'right bottom'


    }}/>

)
const RIGHT_LEG=(
    <div style={{
        height:'10px',
        width:'100px',
        background:'black',
        position:'absolute',
        top:'204px',
        right:'-94px',
        rotate:'60deg',
        transformOrigin:'Left bottom'


    }}/>

)

const BODY_PARTS=[HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]

type HangmanDrawingProps={
    numberOfGuesses:number
}


export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
 return (
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{height:'50px',width:'10px',background:'black',position:'absolute',top:'0',right:'0'}}/>
        <div style={{height:'10px', width:'250px',background:"black" , marginLeft:'120px'}}/>
   <div style={{height:'230px', width:'10px', marginLeft:'120px',background:'black'}}/>
    <div style={{height:'10px', width:'250px',background:"black"}}/>
 </div>
 )
   
 

}

