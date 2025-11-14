export default function Image({imgSrc, category}){
    return <img className={`${category=="Internship" ? "internship-" :""}img`}src={`${imgSrc}?w=400&h=300&fit=crop&auto=format`}></img>
}


