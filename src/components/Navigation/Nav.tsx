'use client'
import {Disclosure} from "@headlessui/react";
import Image from "next/image";
import logo from "@/assets/logotipo_blanco.svg";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import navigation, {classNames} from "@/components/server/MenuItems";
import Link from "next/link";





const Nav = () => {
    return (
        <Disclosure as="nav" className="bg-black_arti">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex-shrink-0 object-contain">
                                    <Link href='/'>
                                        <Image
                                            priority={true}
                                            width='250'
                                            height='80'
                                            className="h-10 w-36"
                                            src={logo}
                                            alt="Artivista"
                                        />
                                    </Link>

                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-black_arti text-white'
                                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>

                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-black_arti text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Nav;