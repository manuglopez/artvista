import React from 'react';
import {Disclosure} from "@headlessui/react";
import navigation, {classNames} from "@/components/server/MenuItems";
const MobileMenuItems = () => {
    return (
        <Disclosure.Panel className="md:hidden text-slate-50">
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
    );
};

export default MobileMenuItems;