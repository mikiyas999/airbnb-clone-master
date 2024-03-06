'use client'

interface Headingprops{
    title:string;
    subtitle?:string;
    center?:boolean;
}

const Heading:React.FC<Headingprops> = ({title,subtitle,center}) => {
    return ( 
        <div className={center ?'text-center':'text-start'}>
           <div className="text-2xl font-bold">{title}</div>
           <div className="font-light text-neutral-600 mt-2">{subtitle}</div> 
        </div>
     );
}
 
export default Heading;
