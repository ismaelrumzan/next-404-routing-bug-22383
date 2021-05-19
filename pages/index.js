import Link from 'next/link'
import {useRouter} from 'next/router'
import useTranslation from "next-translate/useTranslation";

export default function IndexPage(props) {
    const router = useRouter()
    const {locale, locales, defaultLocale} = router
    const { t } = useTranslation('common')

    return (
        <div>
            <h1>Index page</h1>
            <p>Current locale: {locale}</p>
            <p>Default locale: {defaultLocale}</p>
            <p>Configured locales: {JSON.stringify(locales)}</p>

            <h3>Message: {t('message')}</h3>

            <Link href="/" locale="en-BE">
                <a>Go to en-BE</a>
            </Link>
            <br/>

            <Link href="/" locale="es-ES">
                <a>Go to es-ES</a>
            </Link>
            <br/>

            <Link href="/" locale="es-AR">
                <a>Go to es-AR</a>
            </Link>
            <br/>
        </div>
    )
}
