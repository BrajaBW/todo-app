'use client';
export default function Pencet({ color = "bg-red-500",text }) {
    const klik =()=>{
  return(
    alert(`${text}`))
  }
  return (
    <button
      onClick={klik}
      className={`px-5 py-2 rounded text-white ${color}`} 
    >
    Click Me
    </button>
  );
}
export{Pencet}
