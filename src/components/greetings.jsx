import { ProfileCard } from "./profileCard"

function KataMutiara({nama,asal}) {
    const text = `sabar tenang dan damai betul ${nama} yang berasal ${asal}`
    const imgUrl = `https://placehold.co/400`
    const userjJob = "Developer"

    return (
        <>
        <ProfileCard imageUrl={imgUrl} nama={nama} job={userjJob}/>
        <p>{text}</p>
        </>
        
    )
    
}

export{KataMutiara}
// import {Button} from "@/components/button";


// export default function Tombol(){
// const HandleClik = () => {
//     alert("gawat ada amir");
// }
//     return(
//         <div>
//        <button color="red" onClick={HandleClik} >KLIK</button>
//         </div>
//     )
// }