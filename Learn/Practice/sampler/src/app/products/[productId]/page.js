export default function product( {params}){
    console.log(params)
    return(
        <div>
            <h1>Product details {params.productId}</h1>
        </div>
    )
}