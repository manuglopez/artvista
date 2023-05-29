const navigation = [
    { name: 'Revista', href: '/#revista', current: true },
    { name: 'Valores', href: '/#valores', current: false },
    { name: 'Blog', href: '/#blog', current: false },
    { name: 'Contacto', href: '/#contacto', current: false },
    { name: 'Podcast', href: '/#podcast', current: false },
   
]
export function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}
export default navigation
