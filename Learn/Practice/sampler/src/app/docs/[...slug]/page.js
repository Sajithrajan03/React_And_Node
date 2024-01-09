import {notFound} from 'next/navigation'
export default function docs({params}){
    console.log(params)
    console.log(params.slug.length)
    const len = params.slug.length
    if (len===3){
        notFound()
    }
    if (len === 2){

        return (
            <div>
            <h1>{params.slug[0]}</h1>
            <h1>{params.slug[1]}</h1>
            </div>
        )
    }
    else if(len===1){
        return <h1>{params.slug[0]}</h1>
    }
    else{
    return (
        <h1>hwer</h1>
    )
}
}