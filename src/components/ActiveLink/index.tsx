import Link, { LinkProps } from "next/link"
import { ReactElement, cloneElement } from "react"
import { useRouter } from 'next/router';

interface ActiveLinkPorps extends LinkProps {
    children: ReactElement
    activeClassName: string
}

export const ActiveLink = ({ children, activeClassName, ...rest }: ActiveLinkPorps) => {
    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeClassName : ''

    return (
        <Link {...rest}>
            {cloneElement(children, { className })}
        </Link>
    )
}
