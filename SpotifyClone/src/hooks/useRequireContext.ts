import { useContext, type Context } from 'react'

export function useRequiredContext<T>(context: Context<T | null>, contextName: string) {
  const value = useContext(context)

  if (!value) {

    throw new Error(
      `Ошибка в контексте:${contextName}`
    )
    
  }

  return value
}