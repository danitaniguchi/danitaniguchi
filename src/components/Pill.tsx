interface Pill {
    text: string;
}
const Pill = ({text}:Pill) => {
    return (
        <div className="rounded-full p-2 bg-dPink text-white text-sm">
            {text}
        </div>
    )
}

export default Pill; 
