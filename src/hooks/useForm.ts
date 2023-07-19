import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {

  const [form, setform] = useState(initialState)

  const changeValues = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setform({
      ...form,
      [name]: value
    })
  }
  const reset = (newValues = initialState) => {
    setform(newValues)
  }

  return {
    ...form,
    form,
    setform,
    changeValues,
    reset
  }
}
