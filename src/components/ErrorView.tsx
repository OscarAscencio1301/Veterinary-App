import { ReactElement } from "react"

export const ErrorView = ({ children }: { children: ReactElement }) => {
    return (
        <div aria-label="error" className="bg-red-800 text-white rounded py-2"><p>{children}</p></div>
    )
}
