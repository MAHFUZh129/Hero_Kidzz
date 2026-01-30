import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link className='flex gap-2 items-center' href={'/'}>
            <Image src={'/assets/logo.png'} width={50} height={40} alt='her-kidz-logo' />
            <h3 className='text-2xl font-bold'>Hero<span className='text-primary font-extrabold'>Kidzz</span> </h3>
        </Link>
    );
};

export default Logo;