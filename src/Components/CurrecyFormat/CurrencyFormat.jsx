import numeral from "numeral"

const CurrencyFormat = ({ amount }) => {
  const formatAmount = numeral(amount).format("$0,0.00")
  return <div>{formatAmount}</div>
}

export default CurrencyFormat
