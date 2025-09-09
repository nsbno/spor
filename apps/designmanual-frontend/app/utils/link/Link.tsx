import { Link as RemixLink, LinkProps as RemixLinkProps } from 'react-router'

type To = RemixLinkProps['to']
type LinkProps = Omit<RemixLinkProps, 'to'> &
    ({ to: To; href?: never } | { href: string; to?: never })

const INTERNAL_URLS_REGEX = /^https:\/\/(www\.)?vy\.(no|se)/
const EXTERNAL_URL_REGEX = /^https?:\/\//

export function Link({ to, href, ...props }: LinkProps) {
    const destination = to ?? href ?? '/'

    if (!destination) {
        throw new Error("Link destination is required, either 'to' or 'href'")
    }

    if (typeof destination === 'string') {
        if (EXTERNAL_URL_REGEX.test(destination) && !INTERNAL_URLS_REGEX.test(destination)) {
            return (
                <a href={destination} {...props}>
                    {props.children}
                </a>
            )
        }

        if (INTERNAL_URLS_REGEX.test(destination)) {
            const path = destination.replace(INTERNAL_URLS_REGEX, '') as `/${string}`
            return <RemixLink to={path} viewTransition {...props} />
        }
    }

    return <RemixLink prefetch="intent" to={destination} viewTransition {...props} />
}
