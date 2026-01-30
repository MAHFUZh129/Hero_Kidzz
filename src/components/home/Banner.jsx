import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-between' >
            <div className='flex-1 space-y-3'>
             <p
              className={'text-3xl font-bold leading-12'}>“ <span className='text-primary'>HeroKids শিশুদের জন্য একটি আধুনিক লার্নিং প্ল্যাটফর্ম</span>, যেখানে মজার ও ইন্টার‌্যাক্টিভ কনটেন্টের মাধ্যমে শেখাকে করা হয় সহজ, নিরাপদ এবং আনন্দদায়ক।”</p>
             <h4 className='text-lg'>Buy every product with up to 20% discount</h4>
             <button className='btn'>Explore Products</button>
            </div>
            <div className='flex-1'>
            <Image src={'/assets/hero.png'} width={700} height={300} alt='Banner-image'></Image>
            </div>
        </div>
    );
};

export default Banner;