export default function HelloPage() {
    const nama = "BRAJA"

    function sayHello() {
        return `akhirnya spmb beres juga ${nama}`        
    }    

    const isLogin = true

    return(
       <div>
       <h1 className="helo-text">Hallo, Selamat datang {nama}</h1> 
       <p>{10 + 15}</p>
       <p>{sayHello()}</p>
       <p>{isLogin ? `login anda berhasil ${nama} `: `anda belum login`}</p>
       </div>
    )
}
export {sayHello}