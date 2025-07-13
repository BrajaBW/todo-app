const ProfileCard = ({nama,job,imageUrl})=>{
let nama = "BRAJA"
    return (
        <div>
            <img src={imageUrl} alt={nama} />
            <p>{nama}</p>
            <p>{job}</p>
        </div>
    )
}

export{ProfileCard}