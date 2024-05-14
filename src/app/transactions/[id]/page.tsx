export default function Transactions({params}: {params: {id: string}}) {
  const {id} = params;
  return(
    <div>Transactions {id}</div>
  )
}