export type User ={
  id: string
  name: string,
  email: string,
  balance: number
  profits: number
  totalDeposits: number
  totalWithdraws: number
  totalInvestments: number
}

export type ActionData = {
  success: boolean
  message: string
}