// import {Pencet} from "@/components/button"
import {List} from "@/components/list"
import { ButtonComponent } from "@/components/classComponen";

// export default function Tombol() {                        //BUTOON

//   return (
//     <div>
//    <Pencet color="bg-red-600 hover:bg-blue-600" text={"TOMBOL BERHASIL DI PENCET OK"} />
//     </div>
//   );
// }

export default function Daftar(){                //LIST
    const buah = ['jeruk','mangga','apple']
    return(
        <div>
            <h1>NAMA BUAH</h1>
            <List items={buah}/>
            <ButtonComponent nama={buah}/>
        </div>
    );
}

